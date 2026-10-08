import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Terminal, 
  Cpu, 
  GitBranch, 
  Layers, 
  Bug, 
  ArrowRight, 
  Check, 
  ArrowUpRight,
  Shield,
  FileCode,
  Flame,
  Binary,
  Code2
} from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';
import { CodeWindow } from '../components/ui/CodeWindow';
import { ScrollProgressBar } from '../components/ui/ScrollProgressBar';

interface ProductPillar {
  id: string;
  number: string;
  title: string;
  headline: string;
  status: 'In Active Prototype' | 'Planned for Phase 2' | 'Planned for Phase 3' | 'Long-Term Platform Vision';
  problem: string;
  solution: string;
  technicalSpecs: string[];
  visualSnippet: {
    filename: string;
    label: string;
    content: string;
    type: 'diff' | 'tree' | 'log';
  };
}

const pillars: ProductPillar[] = [
  {
    id: 'compiler-diagnostics',
    number: '01',
    title: 'Compiler Error Explanation',
    headline: 'Demystifying template cascades and concept constraint failures.',
    status: 'In Active Prototype',
    problem:
      'C++ template metaprogramming, concepts, and SFINAE errors routinely generate over 100 lines of cascading instantiation noise for a single mismatched argument or non-trivial copy constructor.',
    solution:
      'Kernova intercepts structured JSON diagnostics from Clang and GCC, traverses the AST constraint tree, and isolates the genuine point of invalidation down to a single concise cause with a line diff.',
    technicalSpecs: [
      'Structured JSON ingestion via Clang and GCC -fdiagnostics-format=json',
      'AST-level symbol demangling and constraint tree normalization',
      'Instant patch generation compatible with standard git patch formats',
      'Deterministic verification against compiler AST declarations',
    ],
    visualSnippet: {
      filename: 'concept_evaluation.ast',
      label: 'AST Concept Normalizer',
      type: 'diff',
      content: `@@ include/task.hpp:22,4 +22,4 @@
 struct Task {
     uint64_t task_id;
-    Task(const Task& other) : task_id(other.task_id) {} // Non-trivial copy constructor
+    Task(const Task&) = default; // Restores ContiguousBuffer compatibility
 };`,
    },
  },
  {
    id: 'build-workflows',
    number: '02',
    title: 'C/C++ Build Workflow Management',
    headline: 'Visualizing CMake target graphs and eliminating compilation bottlenecks.',
    status: 'Planned for Phase 2',
    problem:
      'Large C/C++ projects suffer from runaway build times caused by transitive header bloat and serial build bottlenecks that stall Ninja compilation threads.',
    solution:
      'Kernova integrates directly with the CMake File-API and Ninja build logs to illuminate the critical path, detect redundant transitive header inclusions, and suggest forward-declaration optimizations.',
    technicalSpecs: [
      'CMake File-API query parser for target dependency introspection',
      'Ninja build trace analyzer calculating wall-clock latency per translation unit',
      'Transitive header dependency graph detecting multi-megabyte template expansions',
      'Automated suggestions for forward declarations and precompiled headers',
    ],
    visualSnippet: {
      filename: 'build_graph_profile.json',
      label: 'Ninja Critical Path Analyzer',
      type: 'log',
      content: `[Critical Path Analysis]
Target: engine_core.a (elapsed: 48.2s, 62% of aggregate compilation time)
Serial Bottleneck: parser.hpp transitively included across 84 translation units
Recommendation: Forward-declare JsonDocument in header; move template includes to parser.cpp`,
    },
  },
  {
    id: 'linux-integration',
    number: '03',
    title: 'Linux Toolchain Integration',
    headline: 'Native integration with POSIX system toolchains and containers.',
    status: 'In Active Prototype',
    problem:
      'Most developer tools are bloated web wrappers that impose heavy cross-platform virtualization layers and fail to integrate cleanly with Linux system development.',
    solution:
      'Kernova is engineered exclusively for Linux from day one. A lightweight background daemon communicates via native POSIX UNIX domain sockets with zero virtualization penalty.',
    technicalSpecs: [
      'Native POSIX UNIX domain socket IPC (/run/user/$UID/kernova.sock)',
      'Mount and detect Docker and Podman devcontainer environments seamlessly',
      'Sysroot awareness for cross-compilation toolchains (x86_64, aarch64, riscv64)',
      'Adheres strictly to Linux desktop and terminal standards (XDG, PTY)',
    ],
    visualSnippet: {
      filename: 'kernovad.sock',
      label: 'Local Daemon Socket Protocol',
      type: 'log',
      content: `[kernovad] Daemon initialized (PID: 41208, UID: 1000)
[kernovad] Socket: /run/user/1000/kernova.sock (POSIX stream)
[kernovad] Toolchains detected: GCC 14.1.0, Clang 18.1.3, CMake 3.28, Ninja 1.11.1
[kernovad] Zero external network activity · Local source processing active`,
    },
  },
  {
    id: 'debugging-assistance',
    number: '04',
    title: 'Debugging Assistance',
    headline: 'Correlating sanitizer outputs and crash backtraces with source code.',
    status: 'Planned for Phase 3',
    problem:
      'Runtime memory errors are notoriously difficult to triage. Developers must manually correlate hex memory addresses from AddressSanitizer or Valgrind with allocation stack traces.',
    solution:
      'Kernova parses AddressSanitizer (ASan), UndefinedBehaviorSanitizer (UBSan), and Valgrind crash logs, correlating memory allocation boundaries with crash addresses to explain the fault in context.',
    technicalSpecs: [
      'ASan shadow memory and stack allocation boundary demystifier',
      'GDB and LLDB MI (Machine Interface) protocol session bridging',
      'Core dump crash-site disassembly with corresponding source line matching',
      'Thread race condition pattern identification from ThreadSanitizer (TSan)',
    ],
    visualSnippet: {
      filename: 'asan_triage.report',
      label: 'AddressSanitizer Crash Triage',
      type: 'diff',
      content: `@@ src/net/packet_filter.c:88,3 +88,4 @@
 int parse_packet_header(uint8_t* buffer, size_t packet_len, size_t cap) {
+    if (packet_len + sizeof(uint32_t) > cap) return -1; // Prevents 4-byte heap overflow
     uint32_t checksum = *(uint32_t*)(buffer + packet_len);`,
    },
  },
  {
    id: 'ai-comprehension',
    number: '05',
    title: 'Future AI-Powered Code Comprehension',
    headline: 'Local-first intelligence grounded in syntax trees and build state.',
    status: 'Long-Term Platform Vision',
    problem:
      'Generic AI chatbots hallucinate invalid APIs and guess code solutions blindly because they lack access to compiler AST graphs, compilation flags, and build dependencies.',
    solution:
      'Kernova’s planned AI capabilities will be tightly grounded in structural AST context and compiler outputs, executed locally on the user’s machine with guaranteed source code privacy.',
    technicalSpecs: [
      'Grounded retrieval augmented by compile_commands.json and AST index',
      'Local model execution via llama.cpp / ONNX runtime for air-gapped environments',
      'Local-first privacy boundaries: zero proprietary source code uploaded to cloud models',
      'Deterministic compiler verification of any suggested code transformation',
    ],
    visualSnippet: {
      filename: 'local_inference_guard.json',
      label: 'Local Privacy & AST Grounding',
      type: 'log',
      content: `[Privacy Policy Check] Local-First Execution: ACTIVE
[Grounding Context] AstSymbols: 3,420 · CompileFlags: -std=c++20 -O2
[Model Interface] Local Quantized Engine (Air-gapped)
[Verification Gate] Compiler AST verification required before patch presentation`,
    },
  },
];

export const ProductPage: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState(pillars[0].id);
  const activePillar = pillars.find((p) => p.id === activePillarId) || pillars[0];

  return (
    <div className="flex flex-col bg-zinc-950 text-zinc-100 min-h-screen">
      <ScrollProgressBar />
      <SEOHead
        title="Product Capabilities — KERNOVA Developer Workspace"
        description="Explore the Kernova Developer Workspace: compiler error explanations, C/C++ build workflow orchestration, Linux integration, debugging assistance, and future AI tools."
        canonicalPath="/product"
      />

      {/* Hero Header */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-20 border-b border-zinc-900 bg-grid-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/80 text-[11px] font-mono text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>KERNOVA DEVELOPER WORKSPACE</span>
              <span className="text-zinc-600">/</span>
              <span>TECHNICAL SPECIFICATION</span>
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 [text-wrap:balance]">
              Five pillars of modern C/C++ developer infrastructure.
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-400 [text-wrap:balance]">
              A specialized developer environment built to bridge the gap between raw compiler toolchains and modern interactive developer ergonomics on Linux.
            </p>
          </div>

          {/* Interactive Workspace Demo */}
          <div className="mt-14 sm:mt-18">
            <div className="mx-auto max-w-6xl">
              <CodeWindow />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Pillars Detailed Interactive Explorer */}
      <section className="py-20 sm:py-28 border-b border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              Architecture Deep-Dive
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Explore the Five Intended Capabilities
            </h2>
            <p className="mt-3 text-sm text-zinc-400">
              Select a pillar below to inspect its engineering problem, proposed solution, and technical specification.
            </p>
          </div>

          {/* Tabbed Pillar Navigation */}
          <div className="mt-12 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 border-b border-zinc-850">
            {pillars.map((pillar) => {
              const isSelected = pillar.id === activePillarId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-zinc-800 text-cyan-300 font-bold border border-zinc-700 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                  }`}
                >
                  <span className="text-[11px] text-zinc-500">{pillar.number}</span>
                  <span>{pillar.title}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Pillar Presentation */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Problem & Proposed Solution */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="font-bold text-cyan-400">PILLAR {activePillar.number}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-[11px]">
                    {activePillar.status}
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-zinc-100">
                  {activePillar.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-zinc-300">
                  {activePillar.headline}
                </p>

                {/* The Problem */}
                <div className="mt-6 pt-5 border-t border-zinc-800">
                  <div className="font-mono text-xs uppercase tracking-wider text-rose-400 font-bold mb-1.5">
                    The Developer Problem
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {activePillar.problem}
                  </p>
                </div>

                {/* The Solution */}
                <div className="mt-5 pt-5 border-t border-zinc-800">
                  <div className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold mb-1.5">
                    The Kernova Solution
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {activePillar.solution}
                  </p>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-200">
                  Technical Specifications
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {activePillar.technicalSpecs.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed">
                      <Check className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Realistic Visual Snippet & Diagnostic Display */}
            <div className="lg:col-span-6 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-7 font-mono text-xs shadow-xl">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 text-[11px] text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  <span className="font-bold text-zinc-200">{activePillar.visualSnippet.filename}</span>
                </div>
                <span className="text-zinc-500">{activePillar.visualSnippet.label}</span>
              </div>

              <div className="mt-4">
                <div className="rounded-xl bg-zinc-950 p-4 border border-zinc-850 text-zinc-300 leading-relaxed overflow-x-auto text-[11px]">
                  <pre className="whitespace-pre-wrap">{activePillar.visualSnippet.content}</pre>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-zinc-950/60 p-4 border border-zinc-850">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-200 font-mono mb-1">
                  <Shield className="h-3.5 w-3.5 text-cyan-400" />
                  <span>EARLY-STAGE PRODUCT GOVERNANCE</span>
                </div>
                <p className="text-[11px] text-zinc-500 font-sans leading-relaxed">
                  Kernova Developer Workspace is in active prototyping. The capabilities described above reflect our current technical specification and verified milestones, not a finalized commercial release.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product CTA */}
      <section className="py-20 text-center bg-zinc-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
              Interested in testing our early builds?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              We collaborate directly with developers working on complex Linux C/C++ projects. Tell us about your compiler and build workflows.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-5 py-2.5 text-xs font-semibold text-zinc-950 hover:bg-white transition-colors"
              >
                <span>Write to contact@kernova.click</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/technology"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
              >
                <span>Inspect System Architecture</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
