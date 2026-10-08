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
  Shield
} from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';
import { CodeWindow } from '../components/ui/CodeWindow';
import { ScrollProgressBar } from '../components/ui/ScrollProgressBar';
import { FeatureCapability } from '../types';

const capabilities: FeatureCapability[] = [
  {
    id: 'compiler-diagnostics',
    title: 'Compiler Error Explanation',
    subtitle: 'Translating template cascades into concise causes and code diffs',
    status: 'In Development',
    plannedPhase: 'Phase 1 MVP & Phase 2',
    description:
      'C++ template metaprogramming, concepts, and SFINAE errors routinely generate dozens of cryptic lines for a single mismatched argument. Kernova parses the structured diagnostic stream from GCC and Clang, isolates the unmet requirement, and provides a concise root cause alongside an actionable code diff.',
    technicalDetails: [
      'Clang -fdiagnostics-format=json and GCC JSON output parsing',
      'AST-level symbol demangling and constraint tree normalization',
      'Line-by-line diff recommendations for rapid remediation',
      'Deterministic analysis verified against compiler AST nodes',
    ],
  },
  {
    id: 'build-workflows',
    title: 'C/C++ Build Workflow Management',
    subtitle: 'Profiling CMake, Ninja, and Make target graphs',
    status: 'In Development',
    plannedPhase: 'Phase 2',
    description:
      'Large C/C++ projects suffer from runaway compilation times caused by transitive header bloat and inefficient target graphs. Kernova ingests compilation databases (compile_commands.json) and Ninja build traces to illuminate the critical path, spot serial bottlenecks, and identify precompiled header opportunities.',
    technicalDetails: [
      'CMake File-API integration for real-time target configuration inspection',
      'Ninja build log profiler showing wall-clock latency per translation unit',
      'Transitive header dependency graph analyzer to detect compile-time bloat',
      'Suggestions for forward declarations and compilation target restructuring',
    ],
  },
  {
    id: 'linux-integration',
    title: 'Linux Environment Integration',
    subtitle: 'Native support for POSIX toolchains, containers, and sysroots',
    status: 'In Development',
    plannedPhase: 'Phase 1 MVP',
    description:
      'Designed exclusively for the Linux operating system from day one. Kernova interacts directly with host compiler packages, cross-compilation toolchains, sysroots, and Docker/Podman devcontainers without clunky virtualization layers.',
    technicalDetails: [
      'Lightweight daemon running natively on Linux via UNIX domain socket IPC',
      'Detection and support for containerized devcontainers and Podman setups',
      'Sysroot and cross-compilation awareness (x86_64, aarch64, riscv64)',
      'Adheres to Linux desktop and terminal standards (XDG directories, PTY)',
    ],
  },
  {
    id: 'debugging-assistance',
    title: 'Debugging Assistance',
    subtitle: 'GDB/LLDB and sanitizer report triage and crash-site analysis',
    status: 'Planned',
    plannedPhase: 'Phase 3',
    description:
      'Runtime memory errors are notoriously difficult to track down. Kernova ingests crash reports from AddressSanitizer (ASan), UndefinedBehaviorSanitizer (UBSan), and Valgrind, correlating memory allocation sites with crash addresses to present an intuitive explanation of buffer overflows and use-after-free defects.',
    technicalDetails: [
      'ASan shadow memory and stack allocation site demystification',
      'GDB and LLDB MI (Machine Interface) protocol session bridging',
      'Core dump crash-site disassembly with corresponding source line matching',
      'Thread race condition pattern identification from ThreadSanitizer (TSan)',
    ],
  },
  {
    id: 'ai-comprehension',
    title: 'Future AI-Powered Code Comprehension',
    subtitle: 'Local-first intelligent assistance grounded in syntax and build state',
    status: 'Planned',
    plannedPhase: 'Phase 3 & Phase 5',
    description:
      'Unlike generic chatbots that guess code solutions blindly, Kernova’s planned AI capabilities will be tightly grounded in structural AST context and compiler outputs. Developers will be able to query complex legacy C codebases and inspect system call implications with local privacy preserved.',
    technicalDetails: [
      'Grounded retrieval augmented by compile_commands.json and AST index',
      'Local model execution via llama.cpp / ONNX runtime for air-gapped environments',
      'Local-first privacy boundaries: source code processed on user hardware',
      'Focus on technical accuracy over conversational chat',
    ],
  },
];

export const ProductPage: React.FC = () => {
  const [selectedCapabilityId, setSelectedCapabilityId] = useState(capabilities[0].id);
  const selectedCapability = capabilities.find((c) => c.id === selectedCapabilityId) || capabilities[0];

  return (
    <div className="flex flex-col">
      <ScrollProgressBar />
      <SEOHead
        title="Kernova Developer Workspace — Linux C/C++ Environment"
        description="Explore the Kernova Developer Workspace: compiler error explanations, C/C++ build workflow orchestration, Linux integration, debugging assistance, and future AI tools."
        canonicalPath="/product"
      />

      {/* Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>KERNOVA DEVELOPER WORKSPACE</span>
              <span className="text-zinc-400 dark:text-zinc-600">/</span>
              <span>PRODUCT OVERVIEW</span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100 [text-wrap:balance]">
              Designed for low-level systems engineering.
            </h1>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 [text-wrap:balance]">
              A specialized developer environment built to bridge the gap between raw compiler toolchains and modern interactive developer ergonomics on Linux.
            </p>
          </div>

          {/* Interactive Workspace Mockup */}
          <div className="mt-12 sm:mt-16">
            <div className="mx-auto max-w-5xl">
              <CodeWindow />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Pillars Section */}
      <section className="border-t border-zinc-200/80 bg-zinc-50/60 py-16 dark:border-zinc-850 dark:bg-zinc-950/60 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
              Core Capabilities
            </h2>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Each capability addresses a specific, long-standing bottleneck in low-level development.
            </p>
          </div>

          {/* Selector & Detail Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Left Column: Capability List */}
            <div className="space-y-2 lg:col-span-5">
              {capabilities.map((cap, index) => {
                const isSelected = cap.id === selectedCapabilityId;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    onClick={() => setSelectedCapabilityId(cap.id)}
                    className={`w-full rounded-lg border p-3.5 text-left transition-all ${
                      isSelected
                        ? 'border-zinc-900 bg-white shadow-xs dark:border-zinc-200 dark:bg-zinc-900'
                        : 'border-zinc-200/80 bg-white/70 hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-900/30 dark:hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="font-semibold text-zinc-500">0{index + 1}</span>
                      <span className={cap.status === 'In Development' ? 'text-amber-600 dark:text-amber-400' : 'text-zinc-500'}>
                        {cap.status}
                      </span>
                    </div>
                    <h3 className="mt-1 text-xs font-bold text-zinc-900 dark:text-zinc-100">
                      {cap.title}
                    </h3>
                    <p className="mt-0.5 line-clamp-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                      {cap.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Detailed Capability Breakdown */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/50 lg:col-span-7 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
                <div>
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    {selectedCapability.plannedPhase}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-zinc-900 dark:text-zinc-100 sm:text-xl">
                    {selectedCapability.title}
                  </h3>
                </div>
                <div className="font-mono text-xs rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-850 dark:text-zinc-300">
                  {selectedCapability.status}
                </div>
              </div>

              <p className="mt-5 text-xs sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {selectedCapability.description}
              </p>

              <div className="mt-6">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
                  Technical Architecture
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {selectedCapability.technicalDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      <Check className="h-3.5 w-3.5 text-zinc-700 dark:text-zinc-300 mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-md border border-zinc-200 bg-zinc-50/80 p-3.5 text-[11px] font-mono text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-400">
                <div className="flex items-center gap-1.5 font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                  <Shield className="h-3.5 w-3.5 text-zinc-500" />
                  <span>EARLY-STAGE SPECIFICATION</span>
                </div>
                The capabilities described above represent active technical objectives and prototype implementations, not a finalized commercial release.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center border-t border-zinc-200/80 dark:border-zinc-850">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl">
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-2xl">
              Shape our early development
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Share your team’s most painful compilation bottlenecks with our founding engineering team.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
              >
                <span>Request Early Access</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
              </Link>
              <Link
                to="/roadmap"
                className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-700 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              >
                <span>View Roadmap</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
