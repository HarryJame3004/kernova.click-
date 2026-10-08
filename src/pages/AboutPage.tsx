import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Terminal, Shield, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEOHead
        title="About KERNOVA — Mission & Early-Stage Journey"
        description="Learn about Kernova, an independent early-stage developer tools startup building the Linux-first Kernova Developer Workspace. Build Beyond Limits."
        canonicalPath="/about"
      />

      {/* Hero */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>COMPANY & MISSION</span>
              <span className="text-zinc-400 dark:text-zinc-600">/</span>
              <span>INDEPENDENT PROJECT</span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100 [text-wrap:balance]">
              Developer tooling for systems engineers.
            </h1>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 [text-wrap:balance]">
              Kernova was started to solve a clear problem: why should systems programmers endure opaque compiler diagnostics when modern developer ergonomics can make low-level engineering faster and more intuitive?
            </p>
          </div>
        </div>
      </section>

      {/* Startup Journey & Independent Status */}
      <section className="border-t border-zinc-200/80 bg-zinc-50/60 py-16 dark:border-zinc-850 dark:bg-zinc-950/60 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-8">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
              Project Context
            </span>
            <h2 className="mt-1 text-xl font-bold text-zinc-900 dark:text-zinc-100">
              An Independent Early-Stage Startup
            </h2>

            <div className="mt-4 space-y-3 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              <p>
                Kernova is an independent software project currently in its foundational prototyping phase. We are developing an initial MVP focused on C/C++ compiler error explanations and build workflow orchestration.
              </p>
              <p>
                Rather than attempting to rebuild an entire IDE from scratch, our focus is targeted: integrating with existing command-line tools (CMake, Ninja, GCC, Clang) to provide concise diagnostic feedback right where developers already work.
              </p>
              <p>
                We do not invent corporate scale, fictional customer counts, or premature releases. We present our progress transparently as an early-stage engineering initiative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section id="mission" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
              Guiding Principles
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              The four commitments behind our product architecture.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="font-mono text-xs text-zinc-500 uppercase">01</div>
              <h3 className="mt-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                Precision Over Guesswork
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                Systems engineering requires deterministic correctness. We rely on verified compiler AST parsing first, using assistive models only to summarize structured diagnostic trees.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="font-mono text-xs text-zinc-500 uppercase">02</div>
              <h3 className="mt-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                Respect Existing Workflows
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                No proprietary build language lock-in. Kernova works alongside CMake, Ninja, GCC, Clang, Neovim, and VS Code through standard POSIX and LSP interfaces.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="font-mono text-xs text-zinc-500 uppercase">03</div>
              <h3 className="mt-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                Source Code Privacy
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                Low-level source code belongs on your machine. Diagnostic parsing runs locally without remote code telemetry.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="font-mono text-xs text-zinc-500 uppercase">04</div>
              <h3 className="mt-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                Honest Engineering
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                We clearly separate active prototype features from future roadmap items. We build tools that make daily engineering work faster and more reliable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-16 text-center border-t border-zinc-200/80 dark:border-zinc-850">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Get in touch
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Whether you are an embedded engineer, a compiler developer, or an infrastructure lead, we welcome your feedback.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
              >
                <span>Write to contact@kernova.click</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
