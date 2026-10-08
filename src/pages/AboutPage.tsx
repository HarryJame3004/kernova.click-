import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Terminal, Shield, ArrowRight, ArrowUpRight, Compass, Code2 } from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-zinc-950 text-zinc-100 min-h-screen">
      <SEOHead
        title="About KERNOVA — Mission & Engineering Philosophy"
        description="Learn about Kernova, an independent early-stage developer tools startup building the Linux-first Kernova Developer Workspace. Build Beyond Limits."
        canonicalPath="/about"
      />

      {/* Hero Header */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-20 border-b border-zinc-900 bg-grid-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/80 text-[11px] font-mono text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>ABOUT KERNOVA</span>
              <span className="text-zinc-600">/</span>
              <span>INDEPENDENT EARLY-STAGE INITIATIVE</span>
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 [text-wrap:balance]">
              Developer tooling for systems engineers.
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-400 [text-wrap:balance]">
              Kernova was founded on a simple conviction: the engineers building our most critical operating systems, compilers, database engines, and AI accelerators deserve first-class developer tooling.
            </p>
          </div>
        </div>
      </section>

      {/* The Mission & Origin Story */}
      <section className="py-20 sm:py-28 border-b border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                01 · Origin & Purpose
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-zinc-100">
                Why Kernova Exists
              </h2>
              <div className="mt-4 space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                <p>
                  Over the past decade, high-level web and mobile development enjoyed an explosion of sophisticated developer ergonomics: instant hot reloading, zero-configuration formatters, structured type errors, and intelligent bundlers.
                </p>
                <p>
                  Meanwhile, low-level C and C++ developers—who build the operating systems, browser engines, games, and neural network runtimes that power modern computing—remained stuck with archaic diagnostic output: 150-line template cascades, opaque linker failures, and multi-gigabyte terminal logs.
                </p>
                <p>
                  Kernova exists to bridge this divide. We believe systems programming on Linux can maintain its uncompromising performance and control while providing the clarity, speed, and precision of modern developer interfaces.
                </p>
              </div>
            </div>

            {/* Independent Status Disclosure */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-200 mb-2">
                <Compass className="h-4 w-4 text-cyan-400" />
                <span>INDEPENDENT EARLY-STAGE STARTUP</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                Kernova is currently an independent early-stage startup developing its initial MVP prototype. We are not a corporate subsidiary, and we do not invent fictional employee directories, inflated customer logos, or fabricated milestones. Everything we publish reflects active engineering and verified roadmap goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Engineering Principles */}
      <section id="principles" className="py-20 sm:py-28 border-b border-zinc-900 bg-zinc-950/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              Core Principles
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Our Engineering Principles
            </h2>
            <p className="mt-3 text-sm text-zinc-400">
              The four foundational commitments behind every technical decision at Kernova.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
              <span className="font-mono text-xs font-bold text-cyan-400">01</span>
              <h3 className="mt-2 text-lg font-bold text-zinc-100">
                Deterministic Correctness First
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Systems engineering cannot tolerate guesswork or hallucinated APIs. We parse verified compiler AST trees first. Any assistive intelligence is grounded in strict compiler syntax and build dependencies.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
              <span className="font-mono text-xs font-bold text-cyan-400">02</span>
              <h3 className="mt-2 text-lg font-bold text-zinc-100">
                Respect the Terminal Workflow
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                We do not demand that you rewrite your build system or abandon your editor. Kernova hooks directly into existing CMake, Ninja, GCC, Clang, Neovim, and VS Code workflows through POSIX primitives.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
              <span className="font-mono text-xs font-bold text-cyan-400">03</span>
              <h3 className="mt-2 text-lg font-bold text-zinc-100">
                Absolute Source Code Privacy
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Low-level source code contains critical intellectual property. We design our diagnostic engine to execute locally on the user's host machine with zero unauthorized code telemetry.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
              <span className="font-mono text-xs font-bold text-cyan-400">04</span>
              <h3 className="mt-2 text-lg font-bold text-zinc-100">
                Radical Transparency
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                We clearly separate what is currently functioning from what is planned on our roadmap. We speak frankly with engineers and prioritize substance over marketing hype.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect CTA */}
      <section className="py-20 text-center bg-zinc-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
              Connect With Our Team
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              We welcome inquiries from systems developers, compiler engineers, and infrastructure leads.
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
                to="/roadmap"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
              >
                <span>View Engineering Roadmap</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
