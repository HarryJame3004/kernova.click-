import React from 'react';
import { Link } from 'react-router-dom';
import { Check, CircleDashed, Clock, ArrowRight, Shield } from 'lucide-react';
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
      'Development of kernovad Linux daemon with UNIX domain socket IPC',
      'Ingestion parser for Clang JSON diagnostics and GCC -fdiagnostics-format=json streams',
      'Initial AST symbol demangler and template constraint mismatch normalizer',
      'CLI tool demonstrating terminal diagnostic translation into formatted diffs',
      'Evaluation on C++17 and C++20 open-source test suites',
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
      'Integration with CMake File-API for build target introspection',
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
      'Evaluation of grounded local models for memory debugging and runtime crash triage.',
    deliverables: [
      'Automated parsing of AddressSanitizer (ASan) and UndefinedBehaviorSanitizer (UBSan) reports',
      'GDB / LLDB session bridge linking crash backtraces with source code variables',
      'Evaluation of local model inference (llama.cpp) for private code comprehension',
      'Verification benchmarks to test diagnostic fidelity and accuracy in generated diffs',
      'Opt-in developer privacy guardrails ensuring source code remains local',
    ],
  },
  {
    phase: 4,
    title: 'User Testing & Product Refinement',
    status: 'Planned',
    timelineLabel: 'Closed Alpha Testing',
    summary:
      'Testing with selected systems engineering teams to measure real-world build time improvements and usability.',
    deliverables: [
      'Closed alpha testing cohort with C/C++ developers working on Linux systems software',
      'Testing on diverse multi-target codebases and compiler setups',
      'Telemetry-free crash reporting and local benchmark tooling',
      'Packaging and distribution for common Linux distributions',
      'Documentation and technical issue tracker setup',
    ],
  },
  {
    phase: 5,
    title: 'Expanded Developer Platform',
    status: 'Planned',
    timelineLabel: 'Long-Term Platform Vision',
    summary:
      'Evolving the workspace into a comprehensive low-level systems engineering platform supporting cross-language systems tooling.',
    deliverables: [
      'Support for mixed C, C++, and Rust FFI boundary analysis',
      'Cross-compilation profiling for embedded systems (ARM Cortex-M, RISC-V)',
      'Integration with Linux performance profiling tools (perf)',
      'Self-hosted enterprise deployment options for teams',
      'Plugin API for custom compiler extensions and domain-specific linters',
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
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>PRODUCT MILESTONES</span>
              <span className="text-zinc-400 dark:text-zinc-600">/</span>
              <span>5 PLANNED PHASES</span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100 [text-wrap:balance]">
              Engineering Roadmap
            </h1>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 [text-wrap:balance]">
              Our planned development milestones from early MVP prototype to platform expansion. Clear boundaries between active development and future phases.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Phase Roadmap */}
      <section className="border-t border-zinc-200/80 bg-zinc-50/60 py-16 dark:border-zinc-850 dark:bg-zinc-950/60 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {milestones.map((milestone) => {
              const isInProgress = milestone.status === 'In Progress';
              return (
                <div
                  key={milestone.phase}
                  className={`rounded-xl border p-5 sm:p-7 transition-all ${
                    isInProgress
                      ? 'border-zinc-900 bg-white shadow-xs dark:border-zinc-300 dark:bg-zinc-900'
                      : 'border-zinc-200 bg-white/70 dark:border-zinc-800 dark:bg-zinc-900/40'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-3.5 dark:border-zinc-800">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-zinc-500">
                        P0{milestone.phase}
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100">
                          {milestone.title}
                        </h3>
                        <p className="font-mono text-[11px] text-zinc-500">
                          {milestone.timelineLabel}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-xs">
                      {isInProgress ? (
                        <span className="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-semibold text-[11px]">
                          <Clock className="h-3.5 w-3.5" />
                          <span>In Active Progress</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-zinc-500 text-[11px]">
                          <CircleDashed className="h-3.5 w-3.5" />
                          <span>Planned</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {milestone.summary}
                  </p>

                  <div className="mt-5">
                    <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
                      Planned Deliverables
                    </h4>
                    <ul className="mt-2.5 space-y-1.5">
                      {milestone.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                          <Check className="h-3 w-3 mt-0.5 shrink-0 text-zinc-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feedback note */}
          <div className="mt-10 rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <strong className="text-zinc-900 dark:text-zinc-100 font-mono block mb-1">
              ROADMAP GOVERNANCE
            </strong>
            This roadmap reflects verified engineering priorities. If you are developing on Linux and wish to test early Phase 1 prototype builds, contact us at <span className="font-mono text-zinc-900 dark:text-zinc-200">contact@kernova.click</span>.
          </div>
        </div>
      </section>
    </div>
  );
};
