import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Cpu, Shield, ArrowUpRight, Check } from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';
import { CodeWindow } from '../components/ui/CodeWindow';
import { WorkflowDiagram } from '../components/ui/WorkflowDiagram';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEOHead
        title="KERNOVA — Linux-First C/C++ Developer Workspace"
        description="Kernova translates C and C++ compiler cascades, build bottlenecks, and memory crashes into clear, actionable diagnostics. Build Beyond Limits."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section className="relative pt-16 pb-16 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Minimal unboxed status eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>KERNOVA DEVELOPER WORKSPACE</span>
              <span className="text-zinc-400 dark:text-zinc-600">/</span>
              <span>IN ACTIVE DEVELOPMENT</span>
            </div>

            {/* Sharp, Product-Focused Headline */}
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-100 [text-wrap:balance]">
              Turn compiler friction into clear code diffs.
            </h1>

            {/* Concise Subheadline */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 [text-wrap:balance]">
              Kernova decodes C and C++ template cascades, build bottlenecks, and sanitizer crashes into actionable diagnostics. Engineered natively for Linux systems developers.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-zinc-900 px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
              >
                <span>Request Early Access</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-zinc-200 bg-transparent px-4 py-2.5 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-white"
              >
                <span>Explore Capabilities</span>
              </Link>
            </div>

            {/* Quiet notice */}
            <div className="mt-4 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
              contact@kernova.click · No waitlist marketing · Direct feedback
            </div>
          </div>

          {/* Primary Visual Storytelling: Developer Workspace Centerpiece */}
          <div className="mt-12 sm:mt-16">
            <div className="mx-auto max-w-5xl">
              <CodeWindow />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Comparison: Clean hairline layout without candy cards */}
      <section className="border-t border-zinc-200/80 bg-zinc-50/60 py-16 dark:border-zinc-850 dark:bg-zinc-950/60 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
              Why systems engineers lose focus
            </h2>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Modern low-level projects still face diagnostic friction inherited from legacy compiler output.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* The Problem */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="font-mono text-xs text-rose-500 dark:text-rose-400 uppercase tracking-wider font-semibold">
                Without Kernova
              </div>
              <h3 className="mt-2 text-base font-bold text-zinc-900 dark:text-zinc-100">
                Cascading spew and obscure terminal logs
              </h3>
              <ul className="mt-5 space-y-3.5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-zinc-400 font-mono select-none">—</span>
                  <span>A single mismatched template argument produces 100+ lines of nested instantiation notes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-zinc-400 font-mono select-none">—</span>
                  <span>CMake and Ninja compilation delays hide behind wall-clock terminal logs without critical-path visibility.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-zinc-400 font-mono select-none">—</span>
                  <span>AddressSanitizer and Valgrind memory reports require manual pointer arithmetic and stack trace hunting.</span>
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-semibold">
                With Kernova Workspace
              </div>
              <h3 className="mt-2 text-base font-bold text-zinc-900 dark:text-zinc-100">
                Synthesized causes with verifiable diffs
              </h3>
              <ul className="mt-5 space-y-3.5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Parsed compiler AST trees isolate the genuine constraint mismatch down to a single concise cause.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Build graphs profile serial target bottlenecks and reveal redundant transitive header inclusions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Crash sites correlate allocation boundaries with fault addresses to explain memory errors directly in context.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Workflow Pipeline */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <WorkflowDiagram />
        </div>
      </section>

      {/* Core Technology Focus: 3 Clean Pillars */}
      <section className="border-t border-zinc-200/80 bg-zinc-50/60 py-16 dark:border-zinc-850 dark:bg-zinc-950/60 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
              Architectural Foundations
            </h2>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Engineered exclusively for Linux workstations and devcontainers.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <Terminal className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
              <h3 className="mt-4 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                Linux-Native Runtime
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                Runs as a local background daemon communicating via POSIX UNIX domain sockets. No cross-platform runtime bloat.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <Cpu className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
              <h3 className="mt-4 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                Clang & GCC Structured JSON
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                Ingests machine-readable diagnostic streams and AST definitions directly, eliminating inaccurate regex heuristics.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <Shield className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
              <h3 className="mt-4 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                Local-First Privacy
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                Your proprietary source code stays on your machine. Diagnostic parsing runs locally without remote code telemetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early-Stage Startup Mission Callout */}
      <section className="py-16 sm:py-20 border-t border-zinc-200/80 dark:border-zinc-850">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/40 text-center sm:p-12">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Building for developers who value precision over hype
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Kernova is an independent early-stage project developing its initial MVP. We are actively refining our diagnostic engine with systems developers working on compilers, embedded systems, and high-performance infrastructure.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
              >
                <span>Contact Founding Engineers</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
              <Link
                to="/roadmap"
                className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-700 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              >
                <span>View 5-Phase Roadmap</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
