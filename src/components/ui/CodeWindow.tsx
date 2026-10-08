import React, { useState } from 'react';
import { 
  Terminal, 
  Check, 
  Copy, 
  AlertTriangle, 
  ArrowRight, 
  Layers, 
  FileCode, 
  Cpu, 
  Folder, 
  ChevronRight, 
  ChevronDown, 
  Split, 
  Play, 
  RotateCcw,
  GitBranch,
  ShieldAlert,
  Bug,
  Flame
} from 'lucide-react';

interface FileTreeItem {
  name: string;
  type: 'file' | 'folder';
  scenarioId?: string;
  active?: boolean;
}

interface CodeLine {
  lineNum: number;
  code: string;
  isError?: boolean;
  annotation?: string;
  isPatched?: boolean;
}

interface Scenario {
  id: string;
  name: string;
  tag: string;
  badgeColor: string;
  target: string;
  activeFilePath: string;
  breadcrumb: string;
  sourceCode: CodeLine[];
  patchedCode: CodeLine[];
  rawStream: string[];
  diagnostic: {
    title: string;
    category: string;
    astNode: string;
    rootCause: string;
    recommendation: string;
  };
  diff: {
    type: 'header' | 'context' | 'delete' | 'add';
    line?: string;
    text: string;
  }[];
  buildMetrics?: {
    totalTargets: number;
    bottleneckTarget: string;
    latency: string;
    overheadReason: string;
  };
}

const scenarios: Scenario[] = [
  {
    id: 'cpp_concept',
    name: 'C++20 Concept Failure',
    tag: 'Compiler Diagnostics',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    target: 'ninja: [14/320] building graph_executor.cpp.o',
    activeFilePath: 'src/pipeline/graph_executor.cpp',
    breadcrumb: 'src > pipeline > graph_executor.cpp > execute_batch()',
    sourceCode: [
      { lineNum: 138, code: 'template <typename TaskQueue>' },
      { lineNum: 139, code: 'void execute_batch(TaskQueue& queue) {' },
      { lineNum: 140, code: '    std::vector<Task> task_buffer;' },
      { lineNum: 141, code: '    queue.drain_into(task_buffer);' },
      { lineNum: 142, code: '    process_contiguous_batch(task_buffer);', isError: true, annotation: 'requires ContiguousBuffer<std::vector<Task>>: constraint not satisfied' },
      { lineNum: 143, code: '    queue.mark_completed();' },
      { lineNum: 144, code: '}' },
    ],
    patchedCode: [
      { lineNum: 138, code: 'template <typename TaskQueue>' },
      { lineNum: 139, code: 'void execute_batch(TaskQueue& queue) {' },
      { lineNum: 140, code: '    std::vector<Task> task_buffer;' },
      { lineNum: 141, code: '    queue.drain_into(task_buffer);' },
      { lineNum: 142, code: '    process_contiguous_batch(task_buffer);', isPatched: true },
      { lineNum: 143, code: '    queue.mark_completed();' },
      { lineNum: 144, code: '}' },
    ],
    rawStream: [
      'src/pipeline/graph_executor.cpp:142:5: error: no matching function for call to \'process_contiguous_batch\'',
      '  142 |     process_contiguous_batch(task_buffer);',
      '      |     ^~~~~~~~~~~~~~~~~~~~~~~~',
      'include/pipeline/batch.hpp:56:6: note: candidate template ignored: constraints not satisfied',
      '   56 | void process_contiguous_batch(ContiguousRange auto& range) requires ContiguousBuffer<decltype(range)>',
      '      |      ^',
      'include/pipeline/batch.hpp:22:15: note: because \'std::vector<Task>\' does not satisfy \'ContiguousBuffer\'',
      '   22 | concept ContiguousBuffer = std::is_trivially_copyable_v<typename T::value_type>;',
      '      |                            ^',
      'note: \'Task\' is not trivially copyable because it has a user-defined copy constructor at include/task.hpp:24',
    ],
    diagnostic: {
      title: 'Trivially Copyable Constraint Invalidation',
      category: 'Constraint Metaprogramming',
      astNode: 'include/task.hpp:24: struct Task defines custom Task(const Task&);',
      rootCause: 'The `Task` struct defines a custom copy constructor in `task.hpp`, invalidating `std::is_trivially_copyable_v<Task>`. The concept `ContiguousBuffer` requires trivially copyable memory for zero-copy memcpy dispatch.',
      recommendation: 'Replace the custom copy constructor in `include/task.hpp` with `= default`, or adjust the `ContiguousBuffer` concept signature to support non-trivial objects.',
    },
    diff: [
      { type: 'header', text: '@@ include/task.hpp:22,5 +22,4 @@' },
      { type: 'context', line: '22', text: ' struct Task {' },
      { type: 'context', line: '23', text: '     uint64_t task_id;' },
      { type: 'delete', line: '24', text: '-    Task(const Task& other) : task_id(other.task_id) {}' },
      { type: 'add', line: '24', text: '+    Task(const Task&) = default; // Restores is_trivially_copyable_v' },
      { type: 'context', line: '25', text: ' };' },
    ],
    buildMetrics: {
      totalTargets: 320,
      bottleneckTarget: 'graph_executor.cpp.o',
      latency: '2.4s',
      overheadReason: 'Deep SFINAE template instantiation backtrace (depth: 14)',
    },
  },
  {
    id: 'ninja_bottleneck',
    name: 'Build Graph Bottleneck',
    tag: 'Build Orchestration',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    target: 'ninja: target \'engine_core\' serial bottleneck',
    activeFilePath: 'include/engine/parser.hpp',
    breadcrumb: 'include > engine > parser.hpp > Transitive Dependency Graph',
    sourceCode: [
      { lineNum: 10, code: '#pragma once' },
      { lineNum: 11, code: '#include <string>' },
      { lineNum: 12, code: '#include <nlohmann/json.hpp>', isError: true, annotation: 'Heavy serializer template: parsed transitively in 84 translation units' },
      { lineNum: 13, code: '#include <boost/container/flat_map.hpp>', isError: true, annotation: 'Includes 420kB template definitions in public header' },
      { lineNum: 14, code: '' },
      { lineNum: 15, code: 'class ASTParser {' },
      { lineNum: 16, code: 'public:' },
      { lineNum: 17, code: '    bool parse(const std::string& input);' },
      { lineNum: 18, code: '};' },
    ],
    patchedCode: [
      { lineNum: 10, code: '#pragma once' },
      { lineNum: 11, code: '#include <string>' },
      { lineNum: 12, code: 'class JsonDocument; // Forward declaration', isPatched: true },
      { lineNum: 13, code: 'struct ASTNode;    // Heavy includes moved to parser.cpp', isPatched: true },
      { lineNum: 14, code: '' },
      { lineNum: 15, code: 'class ASTParser {' },
      { lineNum: 16, code: 'public:' },
      { lineNum: 17, code: '    bool parse(const std::string& input);' },
      { lineNum: 18, code: '};' },
    ],
    rawStream: [
      '[18/242] Building CXX object src/CMakeFiles/engine.dir/parser.cpp.o (elapsed: 48.2s)',
      '[19/242] Building CXX object src/CMakeFiles/engine.dir/codegen.cpp.o (waiting for parser.hpp)',
      'warning: heavy template header \'parser.hpp\' included transitively in 84 translation units',
      'critical-path analysis: target \'engine_core\' serial bottleneck consumes 62% of aggregate compilation time',
      'diagnostic: 1.4M expanded tokens per translation unit without precompiled header',
    ],
    diagnostic: {
      title: 'Transitive Header Compilation Bloat',
      category: 'Build Graph Critical Path',
      astNode: 'include/engine/parser.hpp:12-13 (#include <nlohmann/json.hpp>)',
      rootCause: 'Heavy template libraries are included directly inside the public header `parser.hpp`. This causes 84 downstream `.cpp` files to re-parse 1.4 million tokens each, stalling Ninja parallelism.',
      recommendation: 'Replace heavyweight header inclusions in `parser.hpp` with forward declarations. Move `#include <nlohmann/json.hpp>` exclusively into the private implementation file `parser.cpp`.',
    },
    diff: [
      { type: 'header', text: '@@ include/engine/parser.hpp:11,4 +11,4 @@' },
      { type: 'delete', line: '12', text: '-#include <nlohmann/json.hpp>' },
      { type: 'delete', line: '13', text: '-#include <boost/container/flat_map.hpp>' },
      { type: 'add', line: '12', text: '+class JsonDocument; // Forward declaration' },
      { type: 'add', line: '13', text: '+struct ASTNode;     // Moves template bloat to parser.cpp' },
    ],
    buildMetrics: {
      totalTargets: 242,
      bottleneckTarget: 'engine_core.a',
      latency: '48.2s',
      overheadReason: 'Serial bottleneck blocking 28 parallel compilation threads',
    },
  },
  {
    id: 'asan_overflow',
    name: 'AddressSanitizer Overflow',
    tag: 'Runtime Diagnostics',
    badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    target: 'bin/packet_filter (ASan heap-buffer-overflow crash)',
    activeFilePath: 'src/net/packet_filter.c',
    breadcrumb: 'src > net > packet_filter.c > parse_packet_header()',
    sourceCode: [
      { lineNum: 86, code: 'int parse_packet_header(uint8_t* buffer, size_t packet_len, size_t cap) {' },
      { lineNum: 87, code: '    if (!buffer || packet_len == 0) return -1;' },
      { lineNum: 88, code: '' },
      { lineNum: 89, code: '    uint32_t checksum = *(uint32_t*)(buffer + packet_len);', isError: true, annotation: 'READ of size 4 at offset 500 on 500-byte allocation boundary' },
      { lineNum: 90, code: '    return verify_crc32(buffer, packet_len, checksum);' },
      { lineNum: 91, code: '}' },
    ],
    patchedCode: [
      { lineNum: 86, code: 'int parse_packet_header(uint8_t* buffer, size_t packet_len, size_t cap) {' },
      { lineNum: 87, code: '    if (!buffer || packet_len == 0) return -1;' },
      { lineNum: 88, code: '    if (packet_len + sizeof(uint32_t) > cap) return -1; // Boundary check', isPatched: true },
      { lineNum: 89, code: '    uint32_t checksum = *(uint32_t*)(buffer + packet_len);' },
      { lineNum: 90, code: '    return verify_crc32(buffer, packet_len, checksum);' },
      { lineNum: 91, code: '}' },
    ],
    rawStream: [
      '=================================================================',
      '==38291==ERROR: AddressSanitizer: heap-buffer-overflow on address 0x6030000001f4',
      'READ of size 4 at 0x6030000001f4 thread T0',
      '    #0 0x55a82c in parse_packet_header src/net/packet_filter.c:89:12',
      '    #1 0x55ac90 in dispatch_loop src/net/daemon.c:134:5',
      '0x6030000001f4 is located 0 bytes to the right of 500-byte region [0x603000000000, 0x6030000001f4)',
      'allocated by thread T0 here:',
      '    #0 0x7f48b in malloc (/usr/lib/clang/18/lib/libclang_rt.asan.so+0x7f48b)',
      '    #1 0x55a712 in allocate_packet_buffer src/net/packet_filter.c:42:19',
    ],
    diagnostic: {
      title: 'Off-By-One Allocation Boundary Read',
      category: 'Memory Sanitizer Triage',
      astNode: 'src/net/packet_filter.c:89: *(uint32_t*)(buffer + packet_len)',
      rootCause: 'Reading 4 bytes (32-bit integer) starting exactly at byte offset 500 on an allocated buffer of exactly 500 bytes. This causes an immediate read past the heap allocation limit.',
      recommendation: 'Add an explicit bounds guard `if (packet_len + sizeof(uint32_t) > cap) return -1;` before computing the checksum pointer dereference.',
    },
    diff: [
      { type: 'header', text: '@@ src/net/packet_filter.c:87,3 +87,4 @@' },
      { type: 'context', line: '87', text: '     if (!buffer || packet_len == 0) return -1;' },
      { type: 'add', line: '88', text: '+    if (packet_len + sizeof(uint32_t) > cap) return -1; // Guard boundary' },
      { type: 'context', line: '89', text: '     uint32_t checksum = *(uint32_t*)(buffer + packet_len);' },
    ],
    buildMetrics: {
      totalTargets: 140,
      bottleneckTarget: 'packet_filter',
      latency: '0.12ms crash',
      overheadReason: 'Heap buffer overflow captured by Clang -fsanitize=address instrumentation',
    },
  },
];

export const CodeWindow: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState(scenarios[0].id);
  const [activeTab, setActiveTab] = useState<'diagnosis' | 'diff' | 'raw' | 'graph'>('diagnosis');
  const [patchApplied, setPatchApplied] = useState(false);
  const [copied, setCopied] = useState(false);

  const scenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  const handleScenarioChange = (id: string) => {
    setActiveScenarioId(id);
    setPatchApplied(false);
  };

  const handleCopy = () => {
    let text = '';
    if (activeTab === 'diagnosis') {
      text = `[Kernova Diagnostic]\nTitle: ${scenario.diagnostic.title}\nRoot Cause: ${scenario.diagnostic.rootCause}\nRecommendation: ${scenario.diagnostic.recommendation}`;
    } else if (activeTab === 'raw') {
      text = scenario.rawStream.join('\n');
    } else {
      text = scenario.diff.map((d) => d.text).join('\n');
    }
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentCodeLines = patchApplied ? scenario.patchedCode : scenario.sourceCode;

  return (
    <div className="w-full rounded-2xl border border-zinc-200/90 bg-zinc-950 text-zinc-100 shadow-2xl shadow-zinc-950/40 overflow-hidden dark:border-zinc-800 transition-all">
      {/* Chrome Top Title Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-850 bg-zinc-900/90 px-4 py-2.5">
        <div className="flex items-center gap-3">
          {/* OS Window Traffic Lights */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700/80" />
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
            <span className="font-semibold text-zinc-300">kernova-workspace</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-500 hidden sm:inline">Linux x86_64 POSIX Daemon</span>
            <span className="text-zinc-600 hidden sm:inline">·</span>
            <span className="text-zinc-300">{scenario.activeFilePath}</span>
          </div>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-750">
            <span className={`h-1.5 w-1.5 rounded-full ${patchApplied ? 'bg-emerald-400' : 'bg-amber-400'}`} />
            <span>{patchApplied ? 'Verified: Clean' : '1 Diagnostic Event'}</span>
          </span>
        </div>
      </div>

      {/* Scenario Bar: One-click technical scenario selector */}
      <div className="flex items-center gap-1.5 overflow-x-auto border-b border-zinc-850 bg-zinc-900/50 px-3 py-1.5 text-xs font-mono">
        <span className="text-zinc-500 text-[11px] uppercase tracking-wider px-2 shrink-0">
          Scenarios:
        </span>
        {scenarios.map((s) => {
          const isSelected = s.id === activeScenarioId;
          return (
            <button
              key={s.id}
              onClick={() => handleScenarioChange(s.id)}
              className={`flex items-center gap-2 rounded-md px-3 py-1 text-xs transition-colors whitespace-nowrap shrink-0 ${
                isSelected
                  ? 'bg-zinc-800 text-white font-medium shadow-xs border border-zinc-700'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850/60'
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${isSelected ? 'bg-cyan-400' : 'bg-zinc-600'}`} />
              <span>{s.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Multi-Pane Workbench Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left Side: File Tree Explorer (Hidden on small mobile, visible on tablet+) */}
        <div className="hidden md:flex flex-col lg:col-span-3 border-r border-zinc-850 bg-zinc-950/70 p-3 font-mono text-xs select-none">
          <div className="text-[11px] uppercase font-bold tracking-wider text-zinc-500 mb-2 px-2">
            Project Explorer
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-zinc-400 px-2 py-1">
              <ChevronDown className="h-3.5 w-3.5 text-zinc-500" />
              <Folder className="h-3.5 w-3.5 text-zinc-400" />
              <span className="text-zinc-300">src</span>
            </div>

            <div className="pl-6 space-y-0.5">
              <button
                onClick={() => handleScenarioChange('cpp_concept')}
                className={`w-full flex items-center gap-2 px-2 py-1 rounded text-left text-xs transition-colors ${
                  activeScenarioId === 'cpp_concept'
                    ? 'bg-zinc-850 text-cyan-300 font-medium'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <FileCode className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">graph_executor.cpp</span>
              </button>

              <button
                onClick={() => handleScenarioChange('asan_overflow')}
                className={`w-full flex items-center gap-2 px-2 py-1 rounded text-left text-xs transition-colors ${
                  activeScenarioId === 'asan_overflow'
                    ? 'bg-zinc-850 text-rose-300 font-medium'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <FileCode className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">packet_filter.c</span>
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-zinc-400 px-2 py-1 mt-1">
              <ChevronDown className="h-3.5 w-3.5 text-zinc-500" />
              <Folder className="h-3.5 w-3.5 text-zinc-400" />
              <span className="text-zinc-300">include</span>
            </div>

            <div className="pl-6 space-y-0.5">
              <button
                onClick={() => handleScenarioChange('ninja_bottleneck')}
                className={`w-full flex items-center gap-2 px-2 py-1 rounded text-left text-xs transition-colors ${
                  activeScenarioId === 'ninja_bottleneck'
                    ? 'bg-zinc-850 text-amber-300 font-medium'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <FileCode className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">parser.hpp</span>
              </button>
            </div>

            <div className="flex items-center gap-2 px-2 py-1 text-zinc-500 mt-2">
              <Terminal className="h-3.5 w-3.5" />
              <span className="truncate">build.ninja</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 text-zinc-500">
              <Terminal className="h-3.5 w-3.5" />
              <span className="truncate">CMakeLists.txt</span>
            </div>
          </div>

          <div className="mt-auto border-t border-zinc-850 pt-3 px-2 text-[11px] text-zinc-500">
            <div>Target: Clang 18.1.3</div>
            <div className="text-zinc-600">POSIX Socket Active</div>
          </div>
        </div>

        {/* Center: Source Code Editor Pane */}
        <div className="flex flex-col lg:col-span-5 border-r border-zinc-850 bg-zinc-950 font-mono text-xs">
          {/* Editor Header: Breadcrumb & Actions */}
          <div className="flex items-center justify-between border-b border-zinc-850 bg-zinc-900/40 px-3 py-2 text-[11px] text-zinc-400">
            <div className="flex items-center gap-1.5 truncate">
              <FileCode className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
              <span className="truncate text-zinc-300">{scenario.breadcrumb}</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setPatchApplied(!patchApplied)}
                className={`inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] transition-colors ${
                  patchApplied
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800'
                    : 'bg-cyan-950/80 text-cyan-300 border border-cyan-800 hover:bg-cyan-900/60'
                }`}
                title="Toggle patch simulation"
              >
                {patchApplied ? <RotateCcw className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                <span>{patchApplied ? 'Revert Code' : 'Simulate Patch'}</span>
              </button>
            </div>
          </div>

          {/* Editor Code Lines */}
          <div className="p-4 flex-1 space-y-1 overflow-x-auto leading-relaxed">
            {currentCodeLines.map((line) => {
              const isError = line.isError && !patchApplied;
              const isPatched = line.isPatched && patchApplied;

              return (
                <div key={line.lineNum} className="relative group">
                  <div
                    className={`flex items-start gap-3 px-2 py-0.5 rounded transition-colors ${
                      isError
                        ? 'bg-rose-950/40 text-rose-200'
                        : isPatched
                        ? 'bg-emerald-950/40 text-emerald-200'
                        : 'text-zinc-300 hover:bg-zinc-900/40'
                    }`}
                  >
                    <span className="w-8 shrink-0 text-right select-none text-zinc-600 text-[11px]">
                      {line.lineNum}
                    </span>
                    <span className="whitespace-pre flex-1 font-mono text-xs">
                      {line.code}
                    </span>
                  </div>

                  {/* Inline Squiggle Popover if error */}
                  {isError && line.annotation && (
                    <div className="ml-11 mt-1 mb-2 p-2 rounded bg-rose-950/80 border border-rose-800/80 text-[11px] text-rose-200 flex items-start gap-2 shadow-lg">
                      <AlertTriangle className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Compiler Diagnostic:</span>{' '}
                        <span>{line.annotation}</span>
                      </div>
                    </div>
                  )}

                  {/* Inline Success Notice if patch applied */}
                  {isPatched && (
                    <div className="ml-11 mt-1 mb-2 p-2 rounded bg-emerald-950/80 border border-emerald-800/80 text-[11px] text-emerald-200 flex items-start gap-2 shadow-lg">
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Applied Remediation:</span>{' '}
                        <span>Concept requirement satisfied. Verified AST syntax.</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="border-t border-zinc-850 bg-zinc-900/30 px-3 py-1.5 text-[11px] text-zinc-500 flex items-center justify-between">
            <span>UTF-8 · C++20 · POSIX Clang</span>
            <span className="text-zinc-400">{patchApplied ? '0 errors' : '1 error detected'}</span>
          </div>
        </div>

        {/* Right Side: Kernova Diagnostic Synthesizer Pane */}
        <div className="flex flex-col lg:col-span-4 bg-zinc-950/90 font-mono text-xs">
          {/* Inspector Header & View Mode Switcher */}
          <div className="flex items-center justify-between border-b border-zinc-850 bg-zinc-900/60 px-3 py-2 text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="font-bold text-zinc-200 uppercase tracking-wider">Kernova Synthesizer</span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Mode Selector Tabs */}
          <div className="flex items-center border-b border-zinc-850 bg-zinc-900/30 px-2 py-1 gap-1 overflow-x-auto text-[11px]">
            <button
              onClick={() => setActiveTab('diagnosis')}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                activeTab === 'diagnosis'
                  ? 'bg-zinc-800 text-white font-medium shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Decoded Cause
            </button>
            <button
              onClick={() => setActiveTab('diff')}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                activeTab === 'diff'
                  ? 'bg-zinc-800 text-white font-medium shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Remediation Diff
            </button>
            <button
              onClick={() => setActiveTab('raw')}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                activeTab === 'raw'
                  ? 'bg-zinc-800 text-white font-medium shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Raw Stream
            </button>
            <button
              onClick={() => setActiveTab('graph')}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                activeTab === 'graph'
                  ? 'bg-zinc-800 text-white font-medium shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Build Graph
            </button>
          </div>

          {/* Inspector Content Body */}
          <div className="p-3.5 flex-1 overflow-y-auto space-y-3.5">
            {activeTab === 'diagnosis' && (
              <div className="space-y-3">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    Isolated Cause
                  </div>
                  <div className="mt-1 text-sm font-bold text-zinc-100">
                    {scenario.diagnostic.title}
                  </div>
                  <p className="mt-1.5 font-sans text-xs leading-relaxed text-zinc-300">
                    {scenario.diagnostic.rootCause}
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-850 bg-zinc-900/30 p-3">
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    AST Declaration Origin
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-cyan-300 break-all">
                    {scenario.diagnostic.astNode}
                  </div>
                </div>

                <div className="rounded-lg border border-zinc-850 bg-zinc-900/30 p-3">
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    Actionable Remediation
                  </div>
                  <p className="mt-1 font-sans text-xs leading-relaxed text-zinc-300">
                    {scenario.diagnostic.recommendation}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'diff' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Proposed Patch Diff</span>
                  <button
                    onClick={() => setPatchApplied(!patchApplied)}
                    className="text-cyan-400 hover:underline"
                  >
                    {patchApplied ? 'Revert Patch' : 'Apply in Editor'}
                  </button>
                </div>

                <div className="rounded-lg border border-zinc-850 bg-zinc-950 p-2.5 font-mono text-[11px] leading-relaxed space-y-0.5">
                  {scenario.diff.map((d, idx) => (
                    <div
                      key={idx}
                      className={`px-1.5 py-0.5 rounded ${
                        d.type === 'add'
                          ? 'bg-emerald-950/60 text-emerald-300'
                          : d.type === 'delete'
                          ? 'bg-rose-950/60 text-rose-300'
                          : d.type === 'header'
                          ? 'text-zinc-500 font-semibold'
                          : 'text-zinc-400'
                      }`}
                    >
                      <span className="whitespace-pre">{d.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'raw' && (
              <div className="space-y-2">
                <div className="text-[11px] text-zinc-400">
                  Raw Compiler Stream (Clang / GCC stderr)
                </div>
                <div className="rounded-lg border border-zinc-850 bg-zinc-950 p-3 font-mono text-[11px] leading-relaxed text-zinc-300 space-y-1 overflow-x-auto">
                  {scenario.rawStream.map((line, idx) => (
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
              </div>
            )}

            {activeTab === 'graph' && (
              <div className="space-y-3">
                <div className="text-[11px] text-zinc-400">
                  Ninja Target Critical Path Profiler
                </div>

                {scenario.buildMetrics && (
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-3 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-400">Bottleneck:</span>
                      <span className="font-bold text-amber-300">{scenario.buildMetrics.bottleneckTarget}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-400">Latency:</span>
                      <span className="font-bold text-zinc-200">{scenario.buildMetrics.latency}</span>
                    </div>
                    <div className="border-t border-zinc-800 pt-2 text-[11px] text-zinc-400 leading-relaxed font-sans">
                      {scenario.buildMetrics.overheadReason}
                    </div>
                  </div>
                )}

                <div className="space-y-1.5 font-mono text-[11px]">
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Target Execution Timeline</span>
                    <span>Elapsed: 48.2s</span>
                  </div>
                  <div className="h-2 rounded-full bg-zinc-800 overflow-hidden flex">
                    <div className="bg-amber-500 w-[62%]" title="engine_core serial wait (62%)" />
                    <div className="bg-cyan-500 w-[24%]" title="codegen.cpp.o (24%)" />
                    <div className="bg-zinc-600 w-[14%]" title="other targets (14%)" />
                  </div>
                  <div className="flex justify-between text-[10px] text-zinc-500">
                    <span>0.0s</span>
                    <span>24.0s</span>
                    <span>48.2s</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Honest Prototype Footer Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-zinc-850 bg-zinc-900/70 px-4 py-2 text-[11px] text-zinc-500 font-mono">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span className="text-zinc-400">CONCEPT DEMONSTRATION · DETERMINISTIC SAMPLE DATA</span>
        </div>
        <span className="text-zinc-500">Simulated Clang 18 AST diagnostic & Ninja build stream</span>
      </div>
    </div>
  );
};
