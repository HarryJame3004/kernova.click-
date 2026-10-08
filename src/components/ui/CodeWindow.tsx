import React, { useState } from 'react';
import { Terminal, Check, Copy, AlertTriangle, ArrowRight, Layers, FileCode, Cpu, Sparkles } from 'lucide-react';

interface Scenario {
  id: string;
  filename: string;
  target: string;
  category: string;
  duration?: string;
  rawError: string[];
  diagnosis: {
    title: string;
    description: string;
    astLocation: string;
    resolution: string;
  };
  diffLines: {
    type: 'context' | 'delete' | 'add' | 'header';
    content: string;
    lineNumber?: string;
  }[];
}

const scenarios: Scenario[] = [
  {
    id: 'cpp_concept',
    filename: 'src/pipeline/graph_executor.cpp',
    target: 'ninja: [14/320] building graph_executor.cpp.o',
    category: 'C++20 Concept Failure',
    rawError: [
      'src/pipeline/graph_executor.cpp:142:5: error: no matching function for call to \'process_batch\'',
      '  142 |     process_batch(task_queue);',
      '      |     ^~~~~~~~~~~~~',
      'include/pipeline/batch.hpp:56:6: note: candidate template ignored: constraints not satisfied',
      '   56 | void process_batch(ContiguousRange auto& range) requires ContiguousBuffer<decltype(range)>',
      '      |      ^',
      'include/pipeline/batch.hpp:22:15: note: because \'std::vector<Task>\' does not satisfy \'ContiguousBuffer\'',
      '   22 | concept ContiguousBuffer = std::is_trivially_copyable_v<typename T::value_type>;',
      '      |                            ^',
      'note: \'Task\' is not trivially copyable because it has a user-provided copy constructor',
    ],
    diagnosis: {
      title: 'Type Invalidation in Template Constraint',
      description: 'The struct `Task` explicitly declares a copy constructor in `task.hpp:24`, invalidating the `std::is_trivially_copyable_v` requirement expected by the `ContiguousBuffer` concept.',
      astLocation: 'include/task.hpp:24: struct Task { Task(const Task&); ... }',
      resolution: 'Default the copy constructor with `= default` to preserve trivial copyability, or relax `ContiguousBuffer` to accept non-trivial memory representations.',
    },
    diffLines: [
      { type: 'header', content: '@@ include/task.hpp:22,6 +22,5 @@' },
      { type: 'context', content: ' struct Task {', lineNumber: '22' },
      { type: 'context', content: '     uint64_t task_id;', lineNumber: '23' },
      { type: 'delete', content: '-    Task(const Task& other) : task_id(other.task_id) {}', lineNumber: '24' },
      { type: 'add', content: '+    Task(const Task&) = default; // Preserves ContiguousBuffer concept', lineNumber: '24' },
      { type: 'context', content: ' };', lineNumber: '25' },
    ],
  },
  {
    id: 'ninja_bottleneck',
    filename: 'build/ninja_build.log',
    target: 'ninja: target \'engine_core\' critical path',
    category: 'Build Graph Bottleneck',
    rawError: [
      '[18/242] Building CXX object src/CMakeFiles/engine.dir/parser.cpp.o (elapsed: 48.2s)',
      '[19/242] Building CXX object src/CMakeFiles/engine.dir/codegen.cpp.o (blocked on parser.hpp)',
      'warning: heavy template header \'parser.hpp\' transitively included across 84 translation units',
      'critical-path analysis: target \'engine_core\' serial bottleneck consumes 62% of aggregate compilation time',
      'diagnostic: 1.4M expanded tokens per translation unit without precompiled header',
    ],
    diagnosis: {
      title: 'Transitive Header Compilation Bloat',
      description: 'Heavy JSON serializers and associative containers are included directly inside `parser.hpp` instead of being forward-declared, forcing 84 downstream translation units to re-parse 1.4M tokens each.',
      astLocation: 'include/parser.hpp:12: #include <nlohmann/json.hpp>',
      resolution: 'Forward-declare AST structures in the public header and isolate template deserializers into `parser.cpp`.',
    },
    diffLines: [
      { type: 'header', content: '@@ include/parser.hpp:11,5 +11,6 @@' },
      { type: 'delete', content: '-#include <nlohmann/json.hpp>', lineNumber: '11' },
      { type: 'delete', content: '-#include <boost/container/flat_map.hpp>', lineNumber: '12' },
      { type: 'add', content: '+class JsonDocument; // Forward declaration', lineNumber: '11' },
      { type: 'add', content: '+struct ParseNode;   // Header parsing cost reduced by 82%', lineNumber: '12' },
      { type: 'context', content: ' class Parser { ... };', lineNumber: '13' },
    ],
  },
  {
    id: 'asan_overflow',
    filename: 'bin/packet_filter',
    target: 'asan: heap-buffer-overflow report',
    category: 'Memory Sanitizer Triage',
    rawError: [
      '=================================================================',
      '==38291==ERROR: AddressSanitizer: heap-buffer-overflow on address 0x6030000001f4',
      'READ of size 4 at 0x6030000001f4 thread T0',
      '    #0 0x55a82c in parse_packet_header src/net/filter.c:89:12',
      '    #1 0x55ac90 in dispatch_loop src/net/daemon.c:134:5',
      '0x6030000001f4 is located 0 bytes to the right of 500-byte region [0x603000000000, 0x6030000001f4)',
      'allocated by thread T0 here:',
      '    #0 0x7f48b in malloc (/usr/lib/clang/18/lib/libclang_rt.asan.so+0x7f48b)',
      '    #1 0x55a712 in allocate_packet_buffer src/net/filter.c:42:19',
    ],
    diagnosis: {
      title: 'Off-By-One Boundary Dereference',
      description: 'The routine `parse_packet_header` reads a 32-bit CRC word starting at offset 500 on a 500-byte allocated buffer, attempting to read 4 bytes past the allocation limit.',
      astLocation: 'src/net/filter.c:89: *(uint32_t*)(buffer + packet_len)',
      resolution: 'Validate that `packet_len + sizeof(uint32_t) <= buffer_capacity` before performing pointer arithmetic.',
    },
    diffLines: [
      { type: 'header', content: '@@ src/net/filter.c:88,4 +88,5 @@' },
      { type: 'context', content: ' int parse_packet_header(uint8_t* buffer, size_t packet_len, size_t cap) {', lineNumber: '88' },
      { type: 'add', content: '+    if (packet_len + sizeof(uint32_t) > cap) return -1; // Boundary guard', lineNumber: '89' },
      { type: 'context', content: '     uint32_t checksum = *(uint32_t*)(buffer + packet_len);', lineNumber: '90' },
    ],
  },
];

export const CodeWindow: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState(scenarios[0].id);
  const [activeTab, setActiveTab] = useState<'synthesis' | 'stream' | 'diff'>('synthesis');
  const [copied, setCopied] = useState(false);

  const scenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  const handleCopy = () => {
    let text = '';
    if (activeTab === 'synthesis') {
      text = `[Kernova Diagnostic]\nCause: ${scenario.diagnosis.title}\nDetails: ${scenario.diagnosis.description}\nLocation: ${scenario.diagnosis.astLocation}\nResolution: ${scenario.diagnosis.resolution}`;
    } else if (activeTab === 'stream') {
      text = scenario.rawError.join('\n');
    } else {
      text = scenario.diffLines.map((l) => l.content).join('\n');
    }

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl border border-zinc-200 bg-zinc-950 text-zinc-100 shadow-2xl shadow-zinc-950/20 overflow-hidden dark:border-zinc-800">
      {/* Top Chrome Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-zinc-800/80 bg-zinc-900/90 px-4 py-2.5">
        <div className="flex items-center gap-3">
          {/* Subtle OS window indicators */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
            <span className="text-zinc-500">kernova-workspace</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-200">{scenario.filename}</span>
          </div>
        </div>

        {/* Scenario Switcher Buttons */}
        <div className="flex items-center gap-1">
          {scenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveScenarioId(s.id)}
              className={`rounded px-2.5 py-1 font-mono text-xs transition-colors ${
                activeScenarioId === s.id
                  ? 'bg-zinc-800 text-white font-medium shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850'
              }`}
            >
              {s.category}
            </button>
          ))}
        </div>
      </div>

      {/* Subheader: Target Execution & View Mode Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-850 bg-zinc-900/40 px-4 py-2 text-xs">
        <div className="flex items-center gap-2 font-mono text-zinc-400">
          <Terminal className="h-3.5 w-3.5 text-zinc-500" />
          <span className="truncate max-w-xs sm:max-w-md text-zinc-300">{scenario.target}</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Mode Selector */}
          <div className="flex items-center rounded-md bg-zinc-900 p-0.5 border border-zinc-800">
            <button
              onClick={() => setActiveTab('synthesis')}
              className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${
                activeTab === 'synthesis'
                  ? 'bg-zinc-800 text-zinc-100 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Decoded Diagnostic
            </button>
            <button
              onClick={() => setActiveTab('stream')}
              className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${
                activeTab === 'stream'
                  ? 'bg-zinc-800 text-zinc-100 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Raw Stream
            </button>
            <button
              onClick={() => setActiveTab('diff')}
              className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${
                activeTab === 'diff'
                  ? 'bg-zinc-800 text-zinc-100 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Remediation Diff
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1 rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-[11px] font-medium text-zinc-400 hover:text-zinc-200 transition-colors"
            title="Copy view content"
          >
            {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Main Terminal Viewport */}
      <div className="p-4 sm:p-5 font-mono text-xs">
        {/* TAB 1: Decoded Diagnostic (Primary Visual Storytelling) */}
        {activeTab === 'synthesis' && (
          <div className="space-y-4">
            {/* Demystified Banner */}
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-amber-500/10 text-amber-400 text-xs font-bold">
                  !
                </span>
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-semibold text-zinc-100 text-sm">
                      {scenario.diagnosis.title}
                    </span>
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono">
                      AST Semantic Match
                    </span>
                  </div>
                  <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                    {scenario.diagnosis.description}
                  </p>
                </div>
              </div>
            </div>

            {/* AST Context & Recommended Action Grid */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-zinc-850 bg-zinc-900/30 p-3.5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                  AST Definition Node
                </div>
                <div className="mt-1.5 text-zinc-300 font-mono text-[11px] break-all">
                  {scenario.diagnosis.astLocation}
                </div>
              </div>

              <div className="rounded-lg border border-zinc-850 bg-zinc-900/30 p-3.5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                  Recommended Action
                </div>
                <div className="mt-1.5 text-zinc-300 font-sans text-xs leading-relaxed">
                  {scenario.diagnosis.resolution}
                </div>
              </div>
            </div>

            {/* Inline Diff Preview */}
            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3.5">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Proposed Patch Diff
              </div>
              <div className="space-y-0.5 font-mono text-xs">
                {scenario.diffLines.map((line, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 px-2 py-0.5 rounded-sm ${
                      line.type === 'add'
                        ? 'bg-emerald-950/40 text-emerald-300'
                        : line.type === 'delete'
                        ? 'bg-rose-950/40 text-rose-300'
                        : line.type === 'header'
                        ? 'text-zinc-500 font-semibold'
                        : 'text-zinc-400'
                    }`}
                  >
                    <span className="w-6 shrink-0 select-none text-zinc-600 text-right">
                      {line.lineNumber || ''}
                    </span>
                    <span className="whitespace-pre flex-1">{line.content}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Raw Compiler Stream */}
        {activeTab === 'stream' && (
          <div className="rounded-lg border border-zinc-850 bg-zinc-950 p-4 font-mono text-xs leading-relaxed text-zinc-300 overflow-x-auto space-y-1">
            {scenario.rawError.map((line, idx) => (
              <div
                key={idx}
                className={
                  line.includes('error:')
                    ? 'text-rose-400 font-semibold'
                    : line.includes('note:')
                    ? 'text-zinc-400'
                    : line.includes('warning:')
                    ? 'text-amber-400'
                    : 'text-zinc-300'
                }
              >
                {line}
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: Full Diff View */}
        {activeTab === 'diff' && (
          <div className="rounded-lg border border-zinc-850 bg-zinc-950 p-4 font-mono text-xs leading-relaxed overflow-x-auto space-y-1">
            {scenario.diffLines.map((line, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 px-2 py-0.5 rounded-sm ${
                  line.type === 'add'
                    ? 'bg-emerald-950/40 text-emerald-300'
                    : line.type === 'delete'
                    ? 'bg-rose-950/40 text-rose-300'
                    : line.type === 'header'
                    ? 'text-zinc-500 font-semibold'
                    : 'text-zinc-400'
                }`}
              >
                <span className="w-8 shrink-0 select-none text-zinc-600 text-right">
                  {line.lineNumber || ''}
                </span>
                <span className="whitespace-pre">{line.content}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Honest Prototype Footer Note */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-zinc-850 bg-zinc-900/60 px-4 py-2 text-[11px] text-zinc-500 font-mono">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
          <span>SAMPLE DATA · CONCEPTUAL PROTOTYPE</span>
        </div>
        <span>Simulated Clang 18 & GCC 14 structured diagnostic output</span>
      </div>
    </div>
  );
};
