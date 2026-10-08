import React from 'react';
import { Link } from 'react-router-dom';
import { Check, CircleDashed, Clock, ArrowRight, Shield, GitBranch, ArrowUpRight } from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';
import { ScrollProgressBar } from '../components/ui/ScrollProgressBar';

interface Milestone {
  phase: string;
  number: string;
  title: string;
  status: 'In Active Progress' | 'Planned for Next Cycle' | 'Future Evaluation';
  statusType: 'active' | 'planned' | 'vision';
  timelineLabel: string;
  summary: string;
  deliverables: { text: string; done?: boolean }[];
}

const milestones: Milestone[] = [
  {
    phase: 'Phase 1',
    number: '01',
    title: 'MVP Prototype & Core Ingestion',
    status: 'In Active Progress',
    statusType: 'active',
    timelineLabel: 'Current Focus · Active Prototyping',
    summary:
      'Laying foundational Linux runtime infrastructure and core diagnostic capture mechanisms for GCC and Clang.',
    deliverables: [
      { text: 'kernovad Linux daemon running via local UNIX domain socket IPC', done: true },
      { text: 'Ingestion parser for Clang JSON diagnostics and GCC -fdiagnostics-format=json', done: true },
      { text: 'AST symbol demangler and template constraint mismatch normalizer', done: false },
      { text: 'CLI tool (kernova-cli) demonstrating terminal diagnostic translation into formatted diffs', done: false },
      { text: 'Benchmarking on C++17 and C++20 open-source test suites', done: false },
    ],
  },
  {
    phase: 'Phase 2',
    number: '02',
    title: 'Compiler Diagnostics & Build Workflow Integration',
    status: 'Planned for Next Cycle',
    statusType: 'planned',
    timelineLabel: 'Planned for Next Engineering Cycle',
    summary:
      'Expanding from single-file errors to full project build orchestration with CMake and Ninja graph profiling.',
    deliverables: [
      { text: 'Direct integration with CMake File-API for build target introspection' },
      { text: 'Ninja build trace parser with critical path compile-time bottleneck visualization' },
      { text: 'Transitive header dependency analyzer for detecting compilation bloat' },
      { text: 'Initial preview of the standalone Kernova Developer Workspace interface' },
      { text: 'LSP protocol bridge providing diagnostics directly to Neovim and VS Code' },
    ],
  },
  {
    phase: 'Phase 3',
    number: '03',
    title: 'AI-Assisted Debugging Evaluation',
    status: 'Future Evaluation',
    statusType: 'vision',
    timelineLabel: 'Research & Evaluation Cycle',
    summary:
      'Rigorous evaluation of grounded local language models for memory debugging and runtime crash triage.',
    deliverables: [
      { text: 'Automated parsing of AddressSanitizer (ASan) and UndefinedBehaviorSanitizer (UBSan) reports' },
      { text: 'GDB / LLDB session bridge linking crash backtraces with source code variables' },
      { text: 'Evaluation of local, quantized model inference (llama.cpp) for private code comprehension' },
      { text: 'Verification benchmarks to test diagnostic fidelity and accuracy in generated diffs' },
      { text: 'Opt-in developer privacy guardrails ensuring source code never leaves the local machine' },
    ],
  },
  {
    phase: 'Phase 4',
    number: '04',
    title: 'User Testing & Product Refinement',
    status: 'Future Evaluation',
    statusType: 'vision',
    timelineLabel: 'Closed Alpha Cycle',
    summary:
      'Closed testing with selected systems engineering teams to measure real-world build time improvements and usability.',
    deliverables: [
      { text: 'Closed alpha testing cohort with C/C++ developers working on Linux systems software' },
      { text: 'Stress testing on multi-million line codebases and complex build graphs' },
      { text: 'Telemetry-free crash reporting and local performance benchmark tooling' },
      { text: 'Packaging and distribution via Linux package managers (APT, AUR, RPM, Nix)' },
      { text: 'Technical architecture guides and documentation' },
    ],
  },
  {
    phase: 'Phase 5',
    number: '05',
    title: 'Expanded Developer Platform',
    status: 'Future Evaluation',
    statusType: 'vision',
    timelineLabel: 'Long-Term Platform Vision',
    summary:
      'Evolving the workspace into a comprehensive low-level systems engineering platform supporting cross-language systems tooling.',
    deliverables: [
      { text: 'Multi-language systems support including C, C++, and Rust FFI boundary analysis' },
      { text: 'Cross-compilation profiling for embedded systems (ARM Cortex-M, RISC-V)' },
      { text: 'Linux performance profiling tool integration (perf/eBPF)' },
      { text: 'Self-hosted team deployment options for internal development servers' },
      { text: 'Plugin API for custom compiler extensions and domain-specific linters' },
    ],
  },
];

export const RoadmapPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-zinc-950 text-zinc-100 min-h-screen">
      <ScrollProgressBar />
      <SEOHead
        title="Engineering Roadmap — KERNOVA"
        description="Review Kernova's 5-phase engineering roadmap: MVP prototype, compiler diagnostics, AI debugging evaluation, user testing, and expanded developer platform."
        canonicalPath="/roadmap"
      />

      {/* Hero Header */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-20 border-b border-zinc-900 bg-grid-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/80 text-[11px] font-mono text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>ENGINEERING TIMELINE</span>
              <span className="text-zinc-600">/</span>
              <span>FIVE PLANNED PHASES</span>
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 [text-wrap:balance]">
              Our path from prototype to production.
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-400 [text-wrap:balance]">
              We believe in honest, public engineering milestones. Every phase below reflects our concrete development timeline, with distinct boundaries between active work and future research.
            </p>
          </div>
        </div>
      </section>

      {/* Distinctive Vertical Timeline Layout */}
      <section className="py-20 sm:py-28 border-b border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 relative">
            {/* Background vertical line */}
            <div className="absolute left-6 sm:left-8 top-6 bottom-6 w-px bg-zinc-800 hidden sm:block" />

            {milestones.map((m) => {
              const isActive = m.statusType === 'active';
              return (
                <div key={m.phase} className="relative sm:pl-16">
                  {/* Timeline node */}
                  <div
                    className={`hidden sm:flex absolute left-4 -translate-x-1/2 top-6 h-8 w-8 rounded-full items-center justify-center font-mono text-xs font-bold border ${
                      isActive
                        ? 'border-cyan-400 bg-zinc-950 text-cyan-300 shadow-md shadow-cyan-950/50'
                        : 'border-zinc-800 bg-zinc-900 text-zinc-500'
                    }`}
                  >
                    {m.number}
                  </div>

                  {/* Milestone Card */}
                  <div
                    className={`rounded-2xl border p-6 sm:p-8 transition-all ${
                      isActive
                        ? 'border-cyan-500/50 bg-zinc-900/80 shadow-xl shadow-cyan-950/20'
                        : 'border-zinc-850 bg-zinc-900/30'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
                      <div>
                        <div className="font-mono text-xs font-bold text-zinc-500">
                          {m.phase}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-zinc-100 mt-0.5">
                          {m.title}
                        </h3>
                        <p className="font-mono text-[11px] text-zinc-500 mt-1">
                          {m.timelineLabel}
                        </p>
                      </div>

                      <div className="font-mono text-xs">
                        {isActive ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 font-semibold text-[11px]">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            <span>In Active Progress</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-[11px]">
                            <CircleDashed className="h-3 w-3" />
                            <span>{m.status}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                      {m.summary}
                    </p>

                    <div className="mt-6">
                      <div className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                        Planned Deliverables
                      </div>
                      <ul className="space-y-2 font-mono text-xs">
                        {m.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-zinc-400 leading-relaxed">
                            {item.done ? (
                              <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            ) : (
                              <span className="text-zinc-600 select-none mt-0.5 font-bold">•</span>
                            )}
                            <span className={item.done ? 'text-zinc-200' : 'text-zinc-400'}>
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Governance Notice */}
          <div className="mt-14 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-200 mb-2">
              <Shield className="h-4 w-4 text-cyan-400" />
              <span>ROADMAP GOVERNANCE COMMITMENT</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              This roadmap represents verified engineering objectives. We update deliverable statuses as code is merged into our development tree. If you would like to participate in early Phase 1 testing or provide requirements for Phase 2, please reach out to our team.
            </p>
            <div className="mt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Request alpha testing participation</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
