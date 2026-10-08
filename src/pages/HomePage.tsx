import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Cpu, GitBranch, Layers, ShieldCheck, Sparkles, CheckCircle, Wrench, Bug } from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';
import { CodeWindow } from '../components/ui/CodeWindow';
import { WorkflowDiagram } from '../components/ui/WorkflowDiagram';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEOHead
        title="KERNOVA — Build Beyond Limits | Linux Developer Workspace"
        description="Kernova is developing a Linux-first developer workspace for C/C++ build workflows, compiler diagnostics, and AI-assisted debugging. Build Beyond Limits."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
        {/* Subtle background ambient gradients */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-40 dark:opacity-30"
        >
          <div className="h-[480px] w-[600px] rounded-full bg-gradient-to-tr from-violet-600/30 via-indigo-600/20 to-cyan-500/20 blur-[130px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Stage Indicator: Unboxed text metadata with typographic separators */}
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="text-violet-600 dark:text-violet-400 font-semibold">KERNOVA</span>
              <span aria-hidden="true">·</span>
              <span>Linux-First C/C++ Engineering</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-600 dark:text-amber-400 font-semibold">Early MVP in Development</span>
            </div>

            {/* Tagline & Main Headline */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl sm:leading-[1.1] dark:text-white [text-wrap:balance]">
              Build Beyond Limits.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300 [text-wrap:balance]">
              Kernova is developing an intelligent, Linux-first developer workspace tailored for C and C++ workflows. We are building unified compiler diagnostics, build graph orchestration, and assistive debugging to replace arcane terminal friction with clarity.
            </p>

            {/* Primary Action Group */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md dark:bg-violet-600 dark:hover:bg-violet-500 whitespace-nowrap"
              >
                <span>Explore Workspace Concept</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700 whitespace-nowrap"
              >
                <span>Request Early Access</span>
              </Link>
            </div>

            {/* Status note */}
            <p className="mt-4 text-xs text-slate-400 dark:text-slate-400">
              Independent early-stage project · No waitlist spam · Direct founder contact
            </p>
          </div>

          {/* Interactive Workspace Concept Preview */}
          <div className="mt-14 sm:mt-18">
            <div className="mx-auto max-w-5xl">
              <CodeWindow />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="border-t border-slate-200/80 bg-slate-50/50 py-20 transition-colors dark:border-slate-800/80 dark:bg-slate-950/60 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              The Systems Developer Dilemma
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white [text-wrap:balance]">
              Modern web stacks enjoy instant feedback. Systems engineers endure diagnostic friction.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 [text-wrap:balance]">
              C and C++ drive the world’s operating systems, game engines, database internals, and AI accelerators. Yet the developer feedback loop remains plagued by century-old tooling ergonomics.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {/* The Current Pain */}
            <div className="rounded-2xl border border-rose-200/70 bg-white p-7 shadow-xs dark:border-rose-950/40 dark:bg-slate-900/40">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 dark:text-rose-400">
                <span>Current Reality</span>
                <span>·</span>
                <span>The Friction We Solve</span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                Cryptic Cascades and Fragmented Workflows
              </h3>
              <ul className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-rose-500 font-bold">×</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Template Instantiation Explosions:</strong> A single missing concept or mismatched type can trigger 200 lines of incomprehensible compiler spew.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-rose-500 font-bold">×</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Opaque Build Bottlenecks:</strong> CMake and Ninja build times balloon without clear visibility into transitive header bloat or serial execution stalls.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-rose-500 font-bold">×</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Toolchain Disconnection:</strong> Compiler errors, sanitizer outputs, GDB sessions, and linter reports live in separate, disconnected terminals.
                  </div>
                </li>
              </ul>
            </div>

            {/* Kernova's Solution */}
            <div className="rounded-2xl border border-violet-200/70 bg-white p-7 shadow-xs dark:border-violet-950/40 dark:bg-slate-900/40">
              <div className="flex items-center gap-2 text-xs font-semibold text-violet-600 dark:text-violet-400">
                <span>Kernova Approach</span>
                <span>·</span>
                <span>In Active Development</span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                A Unified, Linux-First Developer Workspace
              </h3>
              <ul className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-violet-600 dark:text-violet-400" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Structured Error Synthesis:</strong> AST-aware parsing transforms multi-page GCC and Clang errors into actionable root causes and exact line fixes.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-violet-600 dark:text-violet-400" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Real-Time Build Graph Profiling:</strong> Visual inspection of compile target critical paths, precompiled header opportunities, and compilation bottlenecks.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-violet-600 dark:text-violet-400" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Private, Contextual Intelligence:</strong> AI assistance scoped specifically to compiler output and build diagnostics, maintaining 100% source code privacy.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Workflow Visualization */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <WorkflowDiagram />
        </div>
      </section>

      {/* Technology Focus Bento */}
      <section className="border-t border-slate-200/80 bg-slate-50/50 py-20 transition-colors dark:border-slate-800/80 dark:bg-slate-950/60 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              Core Engineering Focus
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white [text-wrap:balance]">
              Engineered from first principles for Linux systems developers
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
              We do not build generic IDE bloat. We build focused, ultra-fast utilities that respect your existing terminal workflow.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400">
                <Terminal className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">
                Linux-First Architecture
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Native integration with Linux system toolchains, devcontainers, POSIX APIs, and containerized build pipelines with zero virtualization penalty.
              </p>
              <div className="mt-4 text-[11px] text-slate-500 dark:text-slate-400">
                <span>POSIX sockets</span> · <span>Zero-overhead daemon</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600/10 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-400">
                <Wrench className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">
                GCC & Clang AST Precision
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Direct integration with LibClang AST matchers and GCC structured diagnostic streams, guaranteeing deterministic syntax and semantic accuracy.
              </p>
              <div className="mt-4 text-[11px] text-slate-500 dark:text-slate-400">
                <span>LibClang C-API</span> · <span>Deterministic parsing</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">
                Developer Sovereignty & Privacy
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Your proprietary source code stays on your machine. Diagnostic synthesis operates locally, without telemetry snooping or mandatory cloud sync.
              </p>
              <div className="mt-4 text-[11px] text-slate-500 dark:text-slate-400">
                <span>Local-first execution</span> · <span>No code telemetry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white p-8 sm:p-12 dark:border-slate-800 dark:from-slate-900/60 dark:to-slate-950">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                Startup Mission & Ethos
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl [text-wrap:balance]">
                Building the developer tooling we always needed
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300 [text-wrap:balance]">
                Kernova was founded on a simple conviction: software infrastructure developers deserve first-class developer experiences. We are not interested in synthetic hype or replacing software engineers. We are building the precision instrumentation that lets systems programmers work with unmatched velocity.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
                >
                  <span>Read our product philosophy</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <Link
                  to="/roadmap"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  <span>View our 5-phase engineering roadmap</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="border-t border-slate-200/80 bg-slate-900 py-16 text-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Want to test early builds of Kernova?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
            We are actively looking for Linux C/C++ developers working on compilers, embedded systems, graphics, or distributed infrastructure to evaluate our early diagnostic engine.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-500"
            >
              <span>Get in Touch at contact@kernova.click</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/product"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-700 hover:text-white"
            >
              <span>Review Capabilities</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
