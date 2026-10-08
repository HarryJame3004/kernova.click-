import React, { useState } from 'react';
import { Terminal, Check, Copy, AlertTriangle, Layers, Activity } from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  badge: string;
  sourceFile: string;
  rawError: string;
  demystifiedExplanation: {
    rootCause: string;
    astContext: string;
    suggestedResolution: string;
  };
  remediationDiff: string;
}

const scenarios: Scenario[] = [
  {
    id: 'template_error',
    name: 'C++20 Concept Failure',
    badge: 'Compiler Diagnostics',
    sourceFile: 'src/pipeline/graph_executor.cpp:142',
    rawError: `error: no matching function for call to 'process_batch(std::vector<Task>&)'
note: candidate template ignored: constraints not satisfied [with T = std::vector<Task>]
note: because 'std::vector<Task>' does not satisfy 'ContiguousBuffer'
note: because 'data()' does not return a contiguous pointer to trivially copyable type 'Task'
fatal error: template instantiation depth exceeded during concept satisfaction evaluation`,
    demystifiedExplanation: {
      rootCause: "Task struct possesses a user-defined copy constructor, which invalidates std::is_trivially_copyable_v<Task> requirement enforced by concept 'ContiguousBuffer'.",
      astContext: "Declaration at include/task.hpp:24: struct Task defines custom destructor ~Task() without std::is_trivial attribute.",
      suggestedResolution: "Replace custom copy constructor with default rule-of-zero member management, or adjust 'ContiguousBuffer' constraint to accept non-trivial memory representations.",
    },
    remediationDiff: `@@ -23,5 +23,4 @@
 struct Task {
     uint64_t task_id;
     std::string payload_ref;
-    Task(const Task& other) : task_id(other.task_id) {} // Blocks trivial copy
+    Task(const Task&) = default; // Restores ContiguousBuffer compatibility
 };`,
  },
  {
    id: 'build_bottleneck',
    name: 'CMake / Ninja Bottleneck',
    badge: 'Build Orchestration',
    sourceFile: 'build/ninja_build.log',
    rawError: `[18/242] Building CXX object src/CMakeFiles/engine.dir/parser.cpp.o (took 48.2s)
[19/242] Building CXX object src/CMakeFiles/engine.dir/codegen.cpp.o (waiting on parser.hpp)
warning: header 'parser.hpp' included transitively in 84 translation units without precompiled header
Critical Path Bottleneck: Target 'engine_core' accounts for 62% of aggregate compilation latency`,
    demystifiedExplanation: {
      rootCause: "Heavy template header <nlohmann/json.hpp> and Boost headers included directly in parser.hpp instead of implementation file, causing massive compilation cascade.",
      astContext: "Translation unit expansion size: 1.4M tokens per .cpp file. Precompiled header (PCH) missing for heavy standard headers.",
      suggestedResolution: "Forward-declare AST nodes in parser.hpp; extract heavyweight serializer includes to parser.cpp; activate target_precompile_headers in CMakeLists.txt.",
    },
    remediationDiff: `@@ -12,2 +12,4 @@
- #include <nlohmann/json.hpp>
- #include <boost/container/flat_map.hpp>
+ class JsonObject; // Forward declaration
+ namespace boost { namespace container { template <typename, typename> class flat_map; } }`,
  },
  {
    id: 'asan_triage',
    name: 'AddressSanitizer Overflow',
    badge: 'Runtime Diagnostics',
    sourceFile: 'bin/packet_filter (ASan crash log)',
    rawError: `=================================================================
==38291==ERROR: AddressSanitizer: heap-buffer-overflow on address 0x6030000001f4
READ of size 4 at 0x6030000001f4 thread T0
    #0 0x55a82c in parse_packet_header src/net/filter.c:89
    #1 0x55ac90 in dispatch_loop src/net/daemon.c:134
0x6030000001f4 is located 0 bytes to the right of 500-byte region [0x603000000000,0x6030000001f4)
allocated by thread T0 here:
    #0 0x7f48b in malloc /usr/lib/clang/16/lib/asan.c:142
    #1 0x55a712 in allocate_packet_buffer src/net/filter.c:42`,
    demystifiedExplanation: {
      rootCause: "Off-by-one boundary read when evaluating 32-bit CRC checksum field at byte offset 500 on an allocated 500-byte buffer.",
      astContext: "Pointer arithmetic in src/net/filter.c:89: *(uint32_t*)(buffer + packet_len) attempts to read 4 bytes starting exactly at the allocation boundary.",
      suggestedResolution: "Verify packet_len + sizeof(uint32_t) <= buffer_capacity before dereference in parse_packet_header.",
    },
    remediationDiff: `@@ -87,4 +87,5 @@
- uint32_t crc = *(uint32_t*)(buffer + packet_len);
+ if (packet_len + sizeof(uint32_t) > buffer_capacity) return ERR_PACKET_OVERFLOW;
+ uint32_t crc = *(uint32_t*)(buffer + packet_len);`,
  },
];

export const CodeWindow: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState(scenarios[0].id);
  const [activeView, setActiveView] = useState<'raw' | 'analysis' | 'diff'>('analysis');
  const [copied, setCopied] = useState(false);

  const currentScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  const handleCopy = () => {
    let textToCopy = '';
    if (activeView === 'raw') textToCopy = currentScenario.rawError;
    else if (activeView === 'analysis') {
      textToCopy = `Root Cause: ${currentScenario.demystifiedExplanation.rootCause}\nContext: ${currentScenario.demystifiedExplanation.astContext}\nResolution: ${currentScenario.demystifiedExplanation.suggestedResolution}`;
    } else {
      textToCopy = currentScenario.remediationDiff;
    }

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 transition-all dark:border-slate-800 dark:bg-slate-950 dark:shadow-2xl dark:shadow-violet-950/20">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">
            kernova-diagnostic-engine · v0.1-prototype
          </span>
        </div>

        {/* Scenario Switcher Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto rounded-lg bg-slate-100 p-1 dark:bg-slate-900">
          {scenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveScenarioId(s.id)}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap ${
                activeScenarioId === s.id
                  ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* Secondary Bar: Active Source & View Mode Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 bg-slate-50/50 px-4 py-2 text-xs dark:border-slate-800/80 dark:bg-slate-900/40">
        <div className="flex items-center gap-2 font-mono text-slate-600 dark:text-slate-400">
          <Terminal className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" />
          <span>{currentScenario.sourceFile}</span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span className="text-slate-500">{currentScenario.badge}</span>
        </div>

        <div className="flex items-center gap-2">
          {/* View Mode Segmented Control */}
          <div className="flex items-center gap-1 rounded-md bg-slate-200/70 p-0.5 dark:bg-slate-800">
            <button
              onClick={() => setActiveView('raw')}
              className={`rounded px-2 py-0.5 text-[11px] font-medium transition-colors ${
                activeView === 'raw'
                  ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-700 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              Raw Clang/GCC Output
            </button>
            <button
              onClick={() => setActiveView('analysis')}
              className={`rounded px-2 py-0.5 text-[11px] font-medium transition-colors ${
                activeView === 'analysis'
                  ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-700 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              Kernova Analysis
            </button>
            <button
              onClick={() => setActiveView('diff')}
              className={`rounded px-2 py-0.5 text-[11px] font-medium transition-colors ${
                activeView === 'diff'
                  ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-700 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              Remediation Diff
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1 rounded border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            title="Copy content"
          >
            {copied ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Main Terminal Body */}
      <div className="p-4 sm:p-5">
        {activeView === 'raw' && (
          <div className="rounded-lg bg-slate-950 p-4 font-mono text-xs leading-relaxed text-rose-300 overflow-x-auto border border-rose-950/40">
            <pre className="whitespace-pre">{currentScenario.rawError}</pre>
          </div>
        )}

        {activeView === 'analysis' && (
          <div className="space-y-4">
            <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3.5 dark:bg-amber-500/10">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <div>
                  <div className="text-xs font-semibold text-amber-700 dark:text-amber-400">
                    Demystified Root Cause
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                    {currentScenario.demystifiedExplanation.rootCause}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-3.5 dark:border-slate-800 dark:bg-slate-900/40">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <Layers className="h-3.5 w-3.5 text-violet-500" />
                  <span>AST & Semantic Context</span>
                </div>
                <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                  {currentScenario.demystifiedExplanation.astContext}
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-3.5 dark:border-slate-800 dark:bg-slate-900/40">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <Activity className="h-3.5 w-3.5 text-cyan-500" />
                  <span>Recommended Action</span>
                </div>
                <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                  {currentScenario.demystifiedExplanation.suggestedResolution}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeView === 'diff' && (
          <div className="rounded-lg bg-slate-950 p-4 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto border border-slate-800">
            <pre className="whitespace-pre">
              {currentScenario.remediationDiff.split('\n').map((line, idx) => {
                const isAdd = line.startsWith('+');
                const isRemove = line.startsWith('-');
                const isMeta = line.startsWith('@@');
                return (
                  <div
                    key={idx}
                    className={`${
                      isAdd
                        ? 'bg-emerald-950/60 text-emerald-300 -mx-4 px-4'
                        : isRemove
                        ? 'bg-rose-950/60 text-rose-300 -mx-4 px-4'
                        : isMeta
                        ? 'text-cyan-400 font-semibold'
                        : 'text-slate-400'
                    }`}
                  >
                    {line}
                  </div>
                );
              })}
            </pre>
          </div>
        )}
      </div>

      {/* Honest Prototype Footer Note */}
      <div className="border-t border-slate-200/80 bg-slate-50/50 px-4 py-2.5 text-center text-[11px] text-slate-500 dark:border-slate-800/80 dark:bg-slate-900/30 dark:text-slate-400">
        <span>Interactive conceptual prototype</span>
        <span className="mx-1.5">·</span>
        <span>Kernova Developer Workspace (In Development)</span>
        <span className="mx-1.5">·</span>
        <span>Simulated diagnostic workflow based on LibClang & GCC JSON formats</span>
      </div>
    </div>
  );
};
