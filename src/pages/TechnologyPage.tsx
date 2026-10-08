import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  GitBranch, 
  Binary, 
  Lock, 
  ArrowRight, 
  CheckCircle, 
  FileCode2, 
  Server,
  Zap
} from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';
import { WorkflowDiagram } from '../components/ui/WorkflowDiagram';
import { ScrollProgressBar } from '../components/ui/ScrollProgressBar';

export const TechnologyPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <ScrollProgressBar />
      <SEOHead
        title="Engineering & Technology Architecture — KERNOVA"
        description="Discover Kernova's engineering approach: Linux-first tooling, GCC & Clang diagnostics, modular architecture, local privacy, and deterministic analysis."
        canonicalPath="/technology"
      />

      {/* Tech Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Unboxed metadata */}
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="text-violet-600 dark:text-violet-400 font-semibold">Technical Architecture</span>
              <span aria-hidden="true">·</span>
              <span>Systems Engineering</span>
              <span aria-hidden="true">·</span>
              <span>Local-First Design</span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white [text-wrap:balance]">
              Deterministic Analysis, Grounded Intelligence
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300 [text-wrap:balance]">
              Kernova is architected specifically for low-level systems developers who demand microsecond responsiveness, complete reproducibility, and absolute source confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Overview Diagram */}
      <section className="border-t border-slate-200/80 bg-slate-50/50 py-16 transition-colors dark:border-slate-800/80 dark:bg-slate-950/60 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              System Topology
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Modular Component Architecture
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              How the Kernova daemon, compiler hooks, and client surfaces communicate via native Linux primitives.
            </p>
          </div>

          {/* Clean High-Craft Vector Architecture Layout */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 sm:p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Layer 1: Toolchain Layer */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-950/50">
                <div className="flex items-center gap-2 text-xs font-semibold text-violet-600 dark:text-violet-400">
                  <Terminal className="h-4 w-4" />
                  <span>Layer 1: Host Toolchains</span>
                </div>
                <h3 className="mt-2 text-base font-bold text-slate-900 dark:text-white">
                  Compiler & Build Systems
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                  Non-invasive hooks capturing compilation telemetry and diagnostics in real time.
                </p>
                <div className="mt-4 space-y-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                  <div className="rounded border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-900">
                    GCC (-fdiagnostics-format=json)
                  </div>
                  <div className="rounded border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-900">
                    Clang (LibClang AST export)
                  </div>
                  <div className="rounded border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-900">
                    CMake (File-API) / Ninja Logs
                  </div>
                </div>
              </div>

              {/* Layer 2: Core Daemon */}
              <div className="rounded-xl border border-violet-500/50 bg-violet-50/30 p-5 dark:border-violet-500/40 dark:bg-violet-950/20">
                <div className="flex items-center gap-2 text-xs font-semibold text-violet-600 dark:text-violet-400">
                  <Cpu className="h-4 w-4" />
                  <span>Layer 2: Local Daemon (kernovad)</span>
                </div>
                <h3 className="mt-2 text-base font-bold text-slate-900 dark:text-white">
                  Analysis & Correlation Engine
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                  Local process executing AST structural parsing, diff generation, and build profiling.
                </p>
                <div className="mt-4 space-y-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                  <div className="rounded border border-violet-200 bg-white p-2 dark:border-violet-900/50 dark:bg-slate-900">
                    AST Normalizer & Matcher
                  </div>
                  <div className="rounded border border-violet-200 bg-white p-2 dark:border-violet-900/50 dark:bg-slate-900">
                    Build Graph Critical-Path Calc
                  </div>
                  <div className="rounded border border-violet-200 bg-white p-2 dark:border-violet-900/50 dark:bg-slate-900">
                    Local Privacy Sandbox Guard
                  </div>
                </div>
              </div>

              {/* Layer 3: Developer Presentation */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-950/50">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                  <Layers className="h-4 w-4" />
                  <span>Layer 3: Developer Surfaces</span>
                </div>
                <h3 className="mt-2 text-base font-bold text-slate-900 dark:text-white">
                  Terminal & Workspace UI
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                  Ultra-lightweight interfaces communicating over UNIX domain sockets.
                </p>
                <div className="mt-4 space-y-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                  <div className="rounded border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-900">
                    kernova CLI (Terminal output)
                  </div>
                  <div className="rounded border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-900">
                    Kernova Workspace GUI (Web/Native)
                  </div>
                  <div className="rounded border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-900">
                    LSP Diagnostic Bridge (Neovim/VSCode)
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-slate-100 p-3 text-center text-xs text-slate-600 dark:bg-slate-800/60 dark:text-slate-400">
              <span className="font-semibold">Local Inter-Process Communication:</span> All telemetry passes exclusively through native POSIX UNIX domain sockets (<code className="font-mono text-[11px]">/run/user/$UID/kernova.sock</code>). Zero remote HTTP overhead.
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Technical Sections */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* 1. Linux-First Tooling */}
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-violet-600 dark:text-violet-400">
                  <span>Pillar 01</span>
                  <span>·</span>
                  <span>Operating System Primitives</span>
                </div>
                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  Linux-First Tooling & Zero-Overhead Integration
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Most modern developer tools are cross-platform web wrappers that penalize memory and startup performance. Kernova is engineered for Linux from its inception, leveraging core POSIX system calls, Linux namespaces, and cgroups to monitor build processes cleanly.
                </p>
                <div className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-violet-500" />
                    <span>Native sub-millisecond process tracking via Linux procfs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-violet-500" />
                    <span>Works identically inside Docker, Podman, and systemd units</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-violet-500" />
                    <span>Sub-20MB daemon memory footprint during idle states</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-950 p-5 font-mono text-xs text-slate-300 dark:border-slate-800 lg:col-span-7">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-slate-500">
                  <span>kernovad --daemon-mode</span>
                  <span className="text-emerald-400">POSIX socket active</span>
                </div>
                <div className="mt-3 space-y-1 text-slate-400">
                  <p><span className="text-violet-400">[info]</span> Initializing LibClang 18.1.3 runtime bindings...</p>
                  <p><span className="text-violet-400">[info]</span> Ingesting compile_commands.json (382 translation units)</p>
                  <p><span className="text-violet-400">[info]</span> Attached to Ninja FIFO build stream: /tmp/ninja.pipe</p>
                  <p><span className="text-violet-400">[info]</span> In-memory AST symbol cache warm: 12.4ms query index</p>
                  <p><span className="text-emerald-400">[ready]</span> Listening on /run/user/1000/kernova.sock (IPC latency: 0.18ms)</p>
                </div>
              </div>
            </div>

            {/* 2. GCC & Clang Diagnostics */}
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-violet-600 dark:text-violet-400">
                  <span>Pillar 02</span>
                  <span>·</span>
                  <span>Compiler Parsers</span>
                </div>
                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  GCC & Clang Structured Diagnostic Pipelines
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Modern GCC and Clang produce rich structured diagnostic logs when supplied with machine-readable format flags. Kernova intercepts these streams directly, transforming unstructured terminal text into hierarchical diagnostic trees that isolate the genuine point of error from template expansion cascades.
                </p>
                <div className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-violet-500" />
                    <span>Eliminates regex guessing by querying structured compiler JSON</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-violet-500" />
                    <span>Maps diagnostics to Clang AST source locations and macros</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-violet-500" />
                    <span>Supports GCC 10+, 11+, 12+, 13+ and Clang 14+</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 lg:col-span-7">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Compiler Diagnostic Ingestion Matrix
                </h4>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 pb-2 font-semibold text-slate-700 dark:border-slate-800 dark:text-slate-300">
                        <th className="py-2">Toolchain</th>
                        <th className="py-2">Capture Interface</th>
                        <th className="py-2">Ingestion Format</th>
                        <th className="py-2">AST Fidelity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono dark:divide-slate-800 text-slate-600 dark:text-slate-400">
                      <tr>
                        <td className="py-2.5 font-sans font-medium text-slate-900 dark:text-white">GCC</td>
                        <td className="py-2.5">-fdiagnostics-format=json</td>
                        <td className="py-2.5">SARIF / JSON Stream</td>
                        <td className="py-2.5 text-violet-600 dark:text-violet-400">High (Macro-expanded)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-sans font-medium text-slate-900 dark:text-white">Clang</td>
                        <td className="py-2.5">LibClang DiagnosticVisitor</td>
                        <td className="py-2.5">C-API AST Nodes</td>
                        <td className="py-2.5 text-violet-600 dark:text-violet-400">Full (Source-level AST)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-sans font-medium text-slate-900 dark:text-white">CMake</td>
                        <td className="py-2.5">CMake File-API (v1)</td>
                        <td className="py-2.5">Target JSON Model</td>
                        <td className="py-2.5 text-cyan-600 dark:text-cyan-400">Graph-Level</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-sans font-medium text-slate-900 dark:text-white">Ninja</td>
                        <td className="py-2.5">.ninja_log / stdout pipe</td>
                        <td className="py-2.5">Execution Log</td>
                        <td className="py-2.5 text-cyan-600 dark:text-cyan-400">Process Times</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 3. Developer Privacy & Transparency */}
            <div id="privacy" className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 dark:border-slate-800 dark:from-slate-900/60 dark:to-slate-950 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <Lock className="h-4 w-4" />
                <span>Pillar 03 · Sovereignty Guarantee</span>
              </div>
              <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                Developer Privacy & Transparency
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Industrial C and C++ development involves sensitive proprietary algorithms, automotive safety routines, defense software, and mission-critical financial cores. Kernova adheres to strict data minimization:
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                  <strong className="text-xs font-bold text-slate-900 dark:text-white">100% Local Source Processing</strong>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                    AST parsing and build graph evaluations occur entirely in your local system memory.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                  <strong className="text-xs font-bold text-slate-900 dark:text-white">Zero Hidden Code Telemetry</strong>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                    No background transmission of source files, variable names, or git commits to cloud servers.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                  <strong className="text-xs font-bold text-slate-900 dark:text-white">Air-Gapped Readiness</strong>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                    Designed to function seamlessly in offline, corporate VPN, and air-gapped lab environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-t border-slate-200/80 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Have questions on our planned architecture?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">
            We love discussing compiler internals, AST walkers, and POSIX system design. Reach out to discuss technical synergies.
          </p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-violet-500"
            >
              <span>Contact Engineering at contact@kernova.click</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
