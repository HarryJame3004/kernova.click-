import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Terminal, 
  Cpu, 
  GitBranch, 
  Layers, 
  Bug, 
  BrainCircuit, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  Shield,
  Zap,
  ChevronRight
} from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';
import { CodeWindow } from '../components/ui/CodeWindow';
import { ScrollProgressBar } from '../components/ui/ScrollProgressBar';
import { FeatureCapability } from '../types';

const capabilities: FeatureCapability[] = [
  {
    id: 'compiler-diagnostics',
    title: 'Compiler Error Explanation',
    subtitle: 'Translating template cascades into plain English and code diffs',
    status: 'In Development',
    plannedPhase: 'Phase 1 MVP & Phase 2',
    description:
      'C++ template metaprogramming, concepts, and SFINAE errors routinely generate dozens of cryptic lines for a single mismatched argument. Kernova parses the raw AST diagnostic stream from GCC and Clang, isolates the exact unmet requirement, and provides a concise root cause alongside an actionable code diff.',
    technicalDetails: [
      'Clang -fdiagnostics-format=json and GCC 10+ JSON output parsing',
      'AST-level symbol unmangling and template constraint tree normalization',
      'Instant line-by-line diff recommendations for quick remediation',
      'Zero hallucination: diagnostic causes verified against compiler AST nodes',
    ],
  },
  {
    id: 'build-workflows',
    title: 'C/C++ Build Workflow Management',
    subtitle: 'End-to-end visualization of CMake, Ninja, and Make graphs',
    status: 'In Development',
    plannedPhase: 'Phase 2',
    description:
      'Large C/C++ projects suffer from runaway compilation times caused by transitive header bloat and inefficient target graphs. Kernova ingests compilation databases (compile_commands.json) and Ninja build traces to illuminate the critical path, spot serial bottlenecks, and identify precompiled header opportunities.',
    technicalDetails: [
      'CMake File-API integration for real-time target configuration inspection',
      'Ninja build log profiler showing wall-clock latency per translation unit',
      'Transitive header dependency graph analyzer to detect compile-time bloat',
      'Automated suggestions for forward declarations and unity build grouping',
    ],
  },
  {
    id: 'linux-integration',
    title: 'Linux Development Environment Integration',
    subtitle: 'Native tooling for POSIX toolchains, containers, and sysroots',
    status: 'In Development',
    plannedPhase: 'Phase 1 MVP',
    description:
      'Designed exclusively for the Linux operating system from day one. Kernova interacts directly with host compiler packages, cross-compilation toolchains, sysroots, and Docker/Podman devcontainers without clunky virtualization layers or cross-platform compromises.',
    technicalDetails: [
      'Zero-latency UNIX domain socket daemon running natively on Linux',
      'Seamless mounting and detection of Devcontainer and Podman environments',
      'Sysroot and cross-compilation target awareness (x86_64, aarch64, riscv64)',
      'Respects Linux desktop standards (XDG Base Directory, terminal PTY standards)',
    ],
  },
  {
    id: 'debugging-assistance',
    title: 'Debugging Assistance',
    subtitle: 'GDB/LLDB and Sanitizer output triage and crash-site analysis',
    status: 'Planned',
    plannedPhase: 'Phase 3',
    description:
      'Runtime memory errors are notoriously difficult to track. Kernova ingests crash reports from AddressSanitizer (ASan), UndefinedBehaviorSanitizer (UBSan), and Valgrind, correlating memory allocation sites with crash addresses to present an intuitive explanation of buffer overflows, use-after-free conditions, and race conditions.',
    technicalDetails: [
      'Automated ASan shadow memory and stack allocation site demystification',
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
      'Unlike generic chatbots that guess code solutions blindly, Kernova’s planned AI capabilities will be tightly grounded in structural AST context and compiler outputs. Developers will be able to query complex legacy C codebases, ask for idiomatic modern C++20/23 refactoring suggestions, and inspect system call implications with guaranteed local privacy.',
    technicalDetails: [
      'Grounded retrieval augmented by compile_commands.json and AST index',
      'Local model execution via llama.cpp / ONNX runtime for air-gapped environments',
      'Strict privacy boundaries: zero proprietary source code uploaded to external servers',
      'Focus on technical accuracy over conversational chattiness',
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

      {/* Product Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Unboxed metadata tag */}
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="text-violet-600 dark:text-violet-400 font-semibold">Core Product</span>
              <span aria-hidden="true">·</span>
              <span>Linux-First Architecture</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-600 dark:text-amber-400 font-semibold">In Active Prototype</span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight dark:text-white [text-wrap:balance]">
              Kernova Developer Workspace
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300 [text-wrap:balance]">
              A specialized developer environment built specifically for systems programmers. Bridging the gap between raw compiler toolchains and modern interactive developer ergonomics on Linux.
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Status:</span>
              <span>Initial MVP currently in active engineering. Feature details represent our current and planned roadmap.</span>
            </div>
          </div>

          {/* Interactive Workspace Mockup */}
          <div className="mt-12 sm:mt-16">
            <div className="mx-auto max-w-5xl">
              <CodeWindow />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Core Capabilities Deep Dive */}
      <section className="border-t border-slate-200/80 bg-slate-50/50 py-20 transition-colors dark:border-slate-800/80 dark:bg-slate-950/60 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              Detailed Product Capabilities
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white [text-wrap:balance]">
              Five Pillars of the Kernova Workspace
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Each capability addresses a specific, long-standing bottleneck in low-level systems programming.
            </p>
          </div>

          {/* Capability Selector & Detail Grid */}
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Column: Capability List */}
            <div className="space-y-3 lg:col-span-5">
              {capabilities.map((cap, index) => {
                const isSelected = cap.id === selectedCapabilityId;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    onClick={() => setSelectedCapabilityId(cap.id)}
                    className={`w-full rounded-xl border p-4 text-left transition-all duration-150 ${
                      isSelected
                        ? 'border-violet-600 bg-white shadow-md dark:border-violet-500 dark:bg-slate-900'
                        : 'border-slate-200 bg-white/70 hover:border-slate-300 dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-violet-600 dark:text-violet-400">
                        0{index + 1}
                      </span>
                      {/* Status indicator: Unboxed text */}
                      <span
                        className={`text-[11px] font-semibold ${
                          cap.status === 'In Development'
                            ? 'text-amber-600 dark:text-amber-400'
                            : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {cap.status}
                      </span>
                    </div>
                    <h3 className="mt-2 text-sm font-bold text-slate-900 dark:text-white">
                      {cap.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
                      {cap.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Detailed Capability Breakdown */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:col-span-7 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4 dark:border-slate-800">
                <div>
                  <span className="text-xs font-semibold text-violet-600 dark:text-violet-400">
                    {selectedCapability.plannedPhase}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                    {selectedCapability.title}
                  </h3>
                </div>
                <div className="text-xs">
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {selectedCapability.status}
                  </span>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {selectedCapability.description}
              </p>

              <div className="mt-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                  Technical Specifications & Architecture
                </h4>
                <ul className="mt-4 space-y-3">
                  {selectedCapability.technicalDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-600 dark:text-violet-400" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-xl border border-slate-100 bg-slate-50/70 p-4 text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-400">
                <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-200">
                  <Shield className="h-4 w-4 text-violet-500" />
                  <span>Engineering Honesty Notice</span>
                </div>
                <p className="mt-1 leading-relaxed">
                  Kernova Developer Workspace is currently in early-stage MVP development. The capabilities described above reflect our precise technical specification and active prototype build, not a released commercial product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action for Early Feedback */}
      <section className="py-16 text-center sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Interested in shaping the MVP?
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              We are working directly with low-level systems programmers to refine our compiler diagnostic engine. Share your toughest compilation bottlenecks with us.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-violet-500"
              >
                <span>Contact Early Access Team</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/roadmap"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700"
              >
                <span>View Full Roadmap</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
