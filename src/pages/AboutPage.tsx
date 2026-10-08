import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, HeartHandshake, Shield, Sparkles, ArrowRight, Code, Terminal } from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEOHead
        title="About KERNOVA — Mission, Philosophy & Early-Stage Journey"
        description="Learn about Kernova, an independent early-stage developer tools startup building the Linux-first Kernova Developer Workspace. Build Beyond Limits."
        canonicalPath="/about"
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Unboxed metadata */}
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="text-violet-600 dark:text-violet-400 font-semibold">About Us</span>
              <span aria-hidden="true">·</span>
              <span>Independent Startup</span>
              <span aria-hidden="true">·</span>
              <span>Early MVP Phase</span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white [text-wrap:balance]">
              Empowering Systems Engineers to Build Beyond Limits
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300 [text-wrap:balance]">
              Kernova was established to solve a singular, persistent frustration: why must C and C++ developers endure arcane, unhelpful compiler output in an era of rapid technological progress?
            </p>
          </div>
        </div>
      </section>

      {/* Startup Journey & Independent Status */}
      <section className="border-t border-slate-200/80 bg-slate-50/50 py-16 transition-colors dark:border-slate-800/80 dark:bg-slate-950/60 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              Our Journey & Status
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              An Independent Early-Stage Project
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <p>
                Kernova is currently an independent, early-stage technology startup operating in its foundational MVP research and prototyping cycle. We are not a corporate subsidiary, nor are we claiming artificial milestones.
              </p>
              <p>
                We started by examining the everyday bottlenecks of systems programming on Linux: spending an hour deciphering a 150-line compiler error caused by a single missing template parameter; chasing down an untracked transitive header that slowed down an entire team’s build by 40 minutes; or parsing raw AddressSanitizer hex traces by hand.
              </p>
              <p>
                Instead of wrapping another web IDE in an unoptimized shell, we decided to engineer dedicated tooling from first principles: lightweight, Linux-native, and tightly integrated into existing command-line workflows.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                <Shield className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                <span>Transparent Representation Guarantee</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                In a market inundated with exaggerated claims, Kernova upholds radical transparency. We do not invent customers, funding rounds, fake team bios, or premature product releases. Every feature described on this website reflects either our working prototype or verified roadmap milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section id="mission" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              Guiding Principles
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Our Product Philosophy
            </h2>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              The four commitments that guide every architectural decision we make at Kernova.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">
                01. Precision Over Hallucination
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Systems software cannot afford probabilistic guesswork. We execute deterministic compiler AST parsing first. Any assistive intelligence is grounded strictly in verified compiler output and syntax graphs.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                <Terminal className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">
                02. Respect Existing Workflows
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                We do not demand that you rewrite your build system or abandon your favorite text editor. Kernova works alongside CMake, Ninja, GCC, Clang, Neovim, and VS Code through standard POSIX protocols.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600/10 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-400">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">
                03. Absolute Source Privacy
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Low-level code contains critical intellectual property. We design all diagnostic and AST evaluation routines to execute on the local machine with zero unauthorized telemetry.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600/10 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">
                04. Built With Developers, Not For Slides
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Our features are driven by direct conversation with active systems programmers. We build tools that make daily engineering work faster, clearer, and genuinely less painful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect with Kernova */}
      <section className="border-t border-slate-200/80 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Connect With Us
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Whether you are an embedded engineer, a compiler enthusiast, or an early-stage investor interested in Linux developer infrastructure, we welcome your feedback.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-violet-500"
              >
                <span>Write to contact@kernova.click</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
