import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Shield, 
  ArrowUpRight, 
  Check, 
  Layers, 
  Zap, 
  FileCode, 
  GitBranch, 
  Bug, 
  Binary,
  Code2,
  Workflow
} from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';
import { CodeWindow } from '../components/ui/CodeWindow';
import { WorkflowDiagram } from '../components/ui/WorkflowDiagram';

export const HomePage: React.FC = () => {
  const [activeAnatomyStep, setActiveAnatomyStep] = useState(0);

  const anatomySteps = [
    {
      step: '01',
      title: 'Compiler Process Hook',
      input: 'Clang / GCC stderr stream',
      mechanism: 'Intercepts structured JSON diagnostics via POSIX FIFO pipe or -fdiagnostics-format=json without modifying your build system.',
      transformation: 'Raw binary/text stream -> Structured Diagnostic Records',
      snippet: `{"kind": "error", "message": "no matching function for call to 'process_contiguous_batch'", "locations": [{"caret": {"line": 142, "column": 5}}]}`,
    },
    {
      step: '02',
      title: 'AST Symbol Normalization',
      input: 'LibClang AST Definitions',
      mechanism: 'Resolves mangled symbols, evaluates template substitution failures, and matches failed concepts against the AST constraint tree.',
      transformation: 'Deeply nested substitution notes -> Normalized concept tree',
      snippet: `ConceptEvaluator: ContiguousBuffer<std::vector<Task>>
  ↳ Requires: std::is_trivially_copyable_v<Task> == true
  ↳ Evaluated: false (Declaration at include/task.hpp:24)`,
    },
    {
      step: '03',
      title: 'Constraint Synthesis',
      input: 'Synthesizer Engine',
      mechanism: 'Isolates the root conflict from secondary noise. Generates a natural-language diagnostic explanation with direct line references.',
      transformation: 'Diagnostic noise -> Root cause isolation',
      snippet: `Diagnosis: struct Task declares custom copy constructor, invalidating trivial copyability required by concept ContiguousBuffer.`,
    },
    {
      step: '04',
      title: 'Actionable Code Diff',
      input: 'Remediation Engine',
      mechanism: 'Synthesizes an exact, verifiable line diff that restores concept compatibility or fixes boundary overflow.',
      transformation: 'Diagnosis -> Verified patch proposal',
      snippet: `- Task(const Task& other) : task_id(other.task_id) {}
+ Task(const Task&) = default; // Restores trivial copyability`,
    },
  ];

  return (
    <div className="flex flex-col bg-zinc-950 text-zinc-100 min-h-screen">
      <SEOHead
        title="KERNOVA — Linux C/C++ Developer Workspace"
        description="Kernova translates C and C++ compiler cascades, build bottlenecks, and memory crashes into clear, actionable diagnostics. Build Beyond Limits."
        canonicalPath="/"
      />

      {/* Hero Section: Precision Engineering Aesthetic */}
      <section className="relative pt-14 pb-20 sm:pt-20 sm:pb-28 border-b border-zinc-900 bg-grid-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Hero Composition */}
          <div className="mx-auto max-w-3xl text-center">
            {/* Architectural Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/80 text-[11px] font-mono text-zinc-400 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-semibold text-zinc-300">LINUX C/C++ INFRASTRUCTURE</span>
              <span className="text-zinc-600">/</span>
              <span>EARLY-STAGE PROTOTYPE</span>
            </div>

            {/* Powerful, Product-Focused Headline */}
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-100 [text-wrap:balance] leading-[1.1]">
              Compiler diagnostics, decoded in real time.
            </h1>

            {/* Sharp Supporting Prose */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-400 [text-wrap:balance]">
              Kernova is building a Linux-native developer workspace for C and C++. We translate cryptic template cascades, build bottlenecks, and sanitizer crashes into actionable code diffs.
            </p>

            {/* Action Group */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-100 px-5 py-2.5 text-xs font-semibold text-zinc-950 transition-all hover:bg-white hover:shadow-lg hover:shadow-zinc-100/10"
              >
                <span>Request Early Access</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-5 py-2.5 text-xs font-semibold text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="h-3.5 w-3.5 opacity-70" />
              </Link>
            </div>

            <div className="mt-4 text-[11px] font-mono text-zinc-500">
              contact@kernova.click · Built for Linux systems engineers · Local-first design
            </div>
          </div>

          {/* Centerpiece: Multi-Panel Developer Workspace */}
          <div className="mt-14 sm:mt-18">
            <div className="mx-auto max-w-6xl">
              <CodeWindow />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Error Anatomy Deconstruction */}
      <section className="py-20 sm:py-28 border-b border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              Diagnostic Pipeline
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100 [text-wrap:balance]">
              How Kernova transforms compiler spew into clarity
            </h2>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              Step through the internal diagnostic translation pipeline. From raw compiler stderr to a verified line diff.
            </p>
          </div>

          {/* 4-Step Interactive Visual Anatomy */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Step Selection Buttons */}
            <div className="space-y-2.5 lg:col-span-5">
              {anatomySteps.map((s, idx) => {
                const isSelected = activeAnatomyStep === idx;
                return (
                  <button
                    key={s.step}
                    onClick={() => setActiveAnatomyStep(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isSelected
                        ? 'border-cyan-500/60 bg-zinc-900/90 shadow-md shadow-cyan-950/20'
                        : 'border-zinc-850 bg-zinc-900/30 hover:border-zinc-800 hover:bg-zinc-900/50'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className={`font-bold ${isSelected ? 'text-cyan-400' : 'text-zinc-500'}`}>
                        STAGE {s.step}
                      </span>
                      <span className="text-[11px] text-zinc-500">
                        {s.input}
                      </span>
                    </div>
                    <h3 className="mt-2 text-sm font-bold text-zinc-100">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {s.mechanism}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Step Terminal Transformation Inspector */}
            <div className="lg:col-span-7 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-7 font-mono text-xs shadow-xl">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 text-[11px] text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  <span className="font-bold text-zinc-200">
                    STAGE {anatomySteps[activeAnatomyStep].step}: {anatomySteps[activeAnatomyStep].title}
                  </span>
                </div>
                <span className="text-zinc-500 font-sans">AST Transformation</span>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-1.5 font-bold">
                    Transformation Target
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-850 text-cyan-300 text-xs">
                    {anatomySteps[activeAnatomyStep].transformation}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-1.5 font-bold">
                    System Architecture Mechanism
                  </div>
                  <p className="font-sans text-xs text-zinc-300 leading-relaxed bg-zinc-950/60 p-3 rounded-lg border border-zinc-850">
                    {anatomySteps[activeAnatomyStep].mechanism}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-1.5 font-bold">
                    Data Representation Sample
                  </div>
                  <div className="rounded-lg bg-zinc-950 p-3.5 border border-zinc-850 text-zinc-300 leading-relaxed overflow-x-auto text-[11px]">
                    <pre className="whitespace-pre-wrap">{anatomySteps[activeAnatomyStep].snippet}</pre>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-800 text-[11px] text-zinc-500 font-mono flex items-center justify-between">
                <span>Deterministic LibClang parsing</span>
                <span>Zero hallucination</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Three Systems Bottlenecks (Editorial Layout) */}
      <section className="py-20 sm:py-28 border-b border-zinc-900 bg-zinc-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              The Three Bottlenecks
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100 [text-wrap:balance]">
              Why systems engineers lose days to diagnostic spew
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bottleneck 1 */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-rose-400 font-bold">BOTTLENECK 01</span>
                  <span className="text-zinc-500">C++ TEMPLATES</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-zinc-100">
                  Concept & SFINAE Cascades
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                  A single missing type requirement triggers 150 lines of nested candidate evaluation notes, hiding the real source error in deep standard library headers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800/80">
                <span className="text-[11px] font-mono text-cyan-400 font-semibold block mb-1">
                  Kernova Resolution
                </span>
                <p className="text-xs text-zinc-300">
                  AST constraint walkers isolate the single unmet concept requirement and show an immediate line diff.
                </p>
              </div>
            </div>

            {/* Bottleneck 2 */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400 font-bold">BOTTLENECK 02</span>
                  <span className="text-zinc-500">BUILD GRAPH</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-zinc-100">
                  Opaque Critical Path Latency
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                  Ninja and CMake compilation times balloon when transitive headers force dozens of translation units to rebuild serially without precompiled headers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800/80">
                <span className="text-[11px] font-mono text-cyan-400 font-semibold block mb-1">
                  Kernova Resolution
                </span>
                <p className="text-xs text-zinc-300">
                  Build graph profiling highlights serial bottlenecks and identifies forward-declaration optimizations.
                </p>
              </div>
            </div>

            {/* Bottleneck 3 */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-violet-400 font-bold">BOTTLENECK 03</span>
                  <span className="text-zinc-500">RUNTIME CRASHES</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-zinc-100">
                  Hex Addresses & Stack Traces
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                  AddressSanitizer and Valgrind outputs require manual pointer arithmetic to correlate allocation sites with out-of-bounds reads.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800/80">
                <span className="text-[11px] font-mono text-cyan-400 font-semibold block mb-1">
                  Kernova Resolution
                </span>
                <p className="text-xs text-zinc-300">
                  Sanitizer triage explains buffer offsets in context and recommends bounds check guards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Architectural Blueprint & Linux Integration */}
      <section className="py-20 sm:py-28 border-b border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <WorkflowDiagram />
        </div>
      </section>

      {/* Section 5: Early-Stage Commitment & Direct Founder Contact */}
      <section className="py-20 sm:py-24 bg-zinc-950 bg-grid-subtle">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 sm:p-12 text-center backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              Founder Direct Access
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-100 [text-wrap:balance]">
              Help shape the future of Linux C/C++ tooling
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed text-zinc-400">
              Kernova is an independent early-stage developer tools startup. We are actively refining our prototype with developers writing compilers, graphics engines, embedded firmwares, and systems software.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
                <span>Review 5-Phase Roadmap</span>
              </Link>
            </div>

            <div className="mt-6 font-mono text-[11px] text-zinc-500">
              No marketing waitlist · Direct engineering collaboration · Local-first privacy
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
