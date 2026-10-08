import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, CircleDashed, Clock, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';
import { ScrollProgressBar } from '../components/ui/ScrollProgressBar';
import { RoadmapMilestone } from '../types';

const milestones: RoadmapMilestone[] = [
  {
    phase: 1,
    title: 'MVP Prototype',
    status: 'In Progress',
    timelineLabel: 'Current Focus · Active Prototyping',
    summary:
      'Laying foundational Linux runtime infrastructure and core diagnostic capture mechanisms for GCC and Clang.',
    deliverables: [
      'Development of kernovad Linux daemon with UNIX domain socket IPC architecture',
      'Ingestion parser for Clang JSON diagnostics and GCC -fdiagnostics-format=json streams',
      'Initial AST symbol demangler and template constraint mismatch normalizer',
      'CLI tool (kernova-cli) demonstrating terminal diagnostic translation into formatted diffs',
      'End-to-end evaluation on C++17 and C++20 open-source test suites',
    ],
  },
  {
    phase: 2,
    title: 'Compiler Diagnostics & Build Workflow Integration',
    status: 'Planned',
    timelineLabel: 'Next Engineering Cycle',
    summary:
      'Expanding from single-file errors to full project build orchestration with CMake and Ninja graph profiling.',
    deliverables: [
      'Direct integration with CMake File-API for build target introspection',
      'Ninja build trace parser with critical path compile-time bottleneck visualization',
      'Transitive header dependency analyzer for detecting compilation bloat',
      'Initial preview of the standalone Kernova Developer Workspace interface',
      'LSP protocol bridge providing diagnostics directly to Neovim and VS Code',
    ],
  },
  {
    phase: 3,
    title: 'AI-Assisted Debugging Evaluation',
    status: 'Planned',
    timelineLabel: 'Research & Evaluation Cycle',
    summary:
      'Rigorous technical evaluation of grounded local language models for memory debugging and runtime crash triage.',
    deliverables: [
      'Automated parsing of AddressSanitizer (ASan) and UndefinedBehaviorSanitizer (UBSan) reports',
      'GDB / LLDB session bridge linking crash backtraces with source code variables',
      'Evaluation of local, quantized LLM inference (llama.cpp) for private code comprehension',
      'Verification benchmarks to guarantee zero hallucination in generated code diffs',
      'Opt-in developer privacy guardrails ensuring source code never leaves the local machine',
    ],
  },
  {
    phase: 4,
    title: 'User Testing & Product Refinement',
    status: 'Planned',
    timelineLabel: 'Closed Alpha Cycle',
    summary:
      'Direct testing with selected systems engineering teams to measure real-world build time improvements and usability.',
    deliverables: [
      'Closed alpha testing cohort with C/C++ developers working on Linux systems software',
      'Stress testing on multi-million line codebases (e.g., LLVM, Linux kernel drivers, Chromium targets)',
      'Telemetry-free crash reporting and local performance benchmark tooling',
      'Packaging and distribution via Linux package managers (APT, AUR, RPM, Nix)',
      'Documentation, architecture guides, and community issue tracker setup',
    ],
  },
  {
    phase: 5,
    title: 'Expanded Developer Platform',
    status: 'Planned',
    timelineLabel: 'Long-Term Platform Vision',
    summary:
      'Evolving the workspace into a comprehensive low-level systems engineering platform supporting Rust interoperability and embedded pipelines.',
    deliverables: [
      'Multi-language systems support including C, C++, and Rust FFI boundary analysis',
      'Cross-compilation profiling for embedded systems (ARM Cortex-M, RISC-V)',
      'eBPF and Linux perf profiler integration directly inside the workspace view',
      'Enterprise self-hosted infrastructure for centralized build cluster analytics',
      'Open plugin API for custom compiler extensions and domain-specific linters',
    ],
  },
];

export const RoadmapPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <ScrollProgressBar />
      <SEOHead
        title="Engineering Roadmap — KERNOVA"
        description="Review Kernova's 5-phase engineering roadmap: MVP prototype, compiler diagnostics, AI debugging evaluation, user testing, and expanded developer platform."
        canonicalPath="/roadmap"
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Unboxed metadata */}
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="text-violet-600 dark:text-violet-400 font-semibold">Engineering Roadmap</span>
              <span aria-hidden="true">·</span>
              <span>Transparent Milestones</span>
              <span aria-hidden="true">·</span>
              <span>5 Planned Phases</span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white [text-wrap:balance]">
              Our Path from Prototype to Production
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300 [text-wrap:balance]">
              We believe in honest, public engineering milestones. Every phase below reflects our concrete development timeline, with distinct boundaries between active work and future research.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Phase Roadmap Timeline */}
      <section className="border-t border-slate-200/80 bg-slate-50/50 py-16 transition-colors dark:border-slate-800/80 dark:bg-slate-950/60 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {milestones.map((milestone) => {
              const isInProgress = milestone.status === 'In Progress';
              return (
                <div
                  key={milestone.phase}
                  className={`rounded-2xl border p-6 transition-all duration-150 sm:p-8 ${
                    isInProgress
                      ? 'border-violet-500/80 bg-white shadow-md dark:border-violet-500/70 dark:bg-slate-900'
                      : 'border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-900/50'
                  }`}
                >
                  {/* Milestone Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 font-mono text-xs font-bold text-violet-600 dark:bg-slate-800 dark:text-violet-400">
                        P{milestone.phase}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          Phase {milestone.phase}: {milestone.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {milestone.timelineLabel}
                        </p>
                      </div>
                    </div>

                    {/* Status badge: Clean unboxed indicator */}
                    <div className="flex items-center gap-1.5 text-xs">
                      {isInProgress ? (
                        <div className="flex items-center gap-1.5 font-semibold text-amber-600 dark:text-amber-400">
                          <Clock className="h-4 w-4" />
                          <span>In Active Progress</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <CircleDashed className="h-4 w-4" />
                          <span>Planned</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {milestone.summary}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                      Planned Deliverables
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {milestone.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2
                            className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                              isInProgress ? 'text-violet-600 dark:text-violet-400' : 'text-slate-400'
                            }`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Verification & Request Notice */}
          <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-violet-600 dark:text-violet-400" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Roadmap Governance & Commitment
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  This roadmap is updated as engineering milestones reach completion. We do not retroactively modify dates or fabricate completed items. If you would like to test early prototypes in Phase 1 or provide feedback on Phase 2 requirements, please reach out to our team.
                </p>
                <div className="mt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
                  >
                    <span>Request alpha testing participation</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
