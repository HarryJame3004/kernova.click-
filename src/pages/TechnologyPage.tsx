import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Terminal, 
  Layers, 
  Shield, 
  Lock, 
  ArrowRight, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';
import { ScrollProgressBar } from '../components/ui/ScrollProgressBar';

export const TechnologyPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <ScrollProgressBar />
      <SEOHead
        title="Engineering Architecture — KERNOVA"
        description="Discover Kernova's engineering approach: Linux-first tooling, GCC & Clang diagnostics, modular architecture, local privacy, and deterministic analysis."
        canonicalPath="/technology"
      />

      {/* Tech Hero */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>SYSTEM ARCHITECTURE</span>
              <span className="text-zinc-400 dark:text-zinc-600">/</span>
              <span>ENGINEERING PRINCIPLES</span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100 [text-wrap:balance]">
              Deterministic compiler analysis on Linux.
            </h1>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 [text-wrap:balance]">
              Kernova is architected for systems developers who demand reproducible diagnostics, native command-line integration, and local source confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Tier Modular Component Architecture */}
      <section className="border-t border-zinc-200/80 bg-zinc-50/60 py-16 dark:border-zinc-850 dark:bg-zinc-950/60 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
              Modular Architecture
            </h2>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              How the Kernova daemon, toolchain hooks, and developer interfaces interact via POSIX primitives.
            </p>
          </div>

          <div className="mt-12 rounded-xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Layer 1 */}
              <div className="rounded-lg border border-zinc-200/90 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-950/50">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  <Terminal className="h-3.5 w-3.5" />
                  <span>Layer 1: Host Toolchains</span>
                </div>
                <h3 className="mt-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  Compiler & Build Capture
                </h3>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Non-invasive ingestion of machine-readable compiler streams and build metadata.
                </p>
                <div className="mt-4 space-y-1.5 font-mono text-[11px] text-zinc-600 dark:text-zinc-400">
                  <div className="rounded border border-zinc-200 bg-white px-2.5 py-1.5 dark:border-zinc-800 dark:bg-zinc-900">
                    GCC (-fdiagnostics-format=json)
                  </div>
                  <div className="rounded border border-zinc-200 bg-white px-2.5 py-1.5 dark:border-zinc-800 dark:bg-zinc-900">
                    Clang (JSON / SARIF AST export)
                  </div>
                  <div className="rounded border border-zinc-200 bg-white px-2.5 py-1.5 dark:border-zinc-800 dark:bg-zinc-900">
                    CMake (File-API) & Ninja Logs
                  </div>
                </div>
              </div>

              {/* Layer 2 */}
              <div className="rounded-lg border border-zinc-300 bg-zinc-100/60 p-4 dark:border-zinc-700 dark:bg-zinc-850/40">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  <Cpu className="h-3.5 w-3.5" />
                  <span>Layer 2: Local Daemon</span>
                </div>
                <h3 className="mt-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  Analysis & Correlation
                </h3>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Local process executing AST structural matching, critical-path profiling, and diff synthesis.
                </p>
                <div className="mt-4 space-y-1.5 font-mono text-[11px] text-zinc-700 dark:text-zinc-300">
                  <div className="rounded border border-zinc-300 bg-white px-2.5 py-1.5 dark:border-zinc-700 dark:bg-zinc-900">
                    AST Normalizer & Matcher
                  </div>
                  <div className="rounded border border-zinc-300 bg-white px-2.5 py-1.5 dark:border-zinc-700 dark:bg-zinc-900">
                    Build Graph Critical-Path Calc
                  </div>
                  <div className="rounded border border-zinc-300 bg-white px-2.5 py-1.5 dark:border-zinc-700 dark:bg-zinc-900">
                    Local Privacy Sandbox
                  </div>
                </div>
              </div>

              {/* Layer 3 */}
              <div className="rounded-lg border border-zinc-200/90 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-950/50">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  <Layers className="h-3.5 w-3.5" />
                  <span>Layer 3: Developer Presentation</span>
                </div>
                <h3 className="mt-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  Terminal & Workspace UI
                </h3>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Lightweight presentation surfaces communicating over standard UNIX domain sockets.
                </p>
                <div className="mt-4 space-y-1.5 font-mono text-[11px] text-zinc-600 dark:text-zinc-400">
                  <div className="rounded border border-zinc-200 bg-white px-2.5 py-1.5 dark:border-zinc-800 dark:bg-zinc-900">
                    kernova CLI (Terminal output)
                  </div>
                  <div className="rounded border border-zinc-200 bg-white px-2.5 py-1.5 dark:border-zinc-800 dark:bg-zinc-900">
                    Kernova Workspace Interface
                  </div>
                  <div className="rounded border border-zinc-200 bg-white px-2.5 py-1.5 dark:border-zinc-800 dark:bg-zinc-900">
                    LSP Bridge (Neovim & VS Code)
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-md bg-zinc-100 p-3 text-center text-xs text-zinc-600 dark:bg-zinc-950 dark:text-zinc-400 font-mono">
              IPC Protocol: Native POSIX UNIX domain socket (<span className="text-zinc-900 dark:text-zinc-200">/run/user/$UID/kernova.sock</span>). Zero external HTTP dependencies.
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Technical Sections */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Pillar 1 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-start">
            <div className="md:col-span-5">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                01 · System Design
              </span>
              <h3 className="mt-1 text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Linux-First Architecture
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Built specifically for Linux workstations, devcontainers, and CI environments. Kernova avoids bloated cross-platform abstraction layers in favor of native POSIX system calls.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-zinc-700 dark:text-zinc-300 mt-0.5 shrink-0" />
                  <span>Native process tracking via standard Linux procfs interfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-zinc-700 dark:text-zinc-300 mt-0.5 shrink-0" />
                  <span>Compatible with standard Docker and Podman container environments</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-zinc-700 dark:text-zinc-300 mt-0.5 shrink-0" />
                  <span>Daemon architecture designed for low resident memory utilization</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-7 rounded-xl border border-zinc-250 bg-zinc-950 p-4 font-mono text-xs text-zinc-300 dark:border-zinc-800">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-[11px] text-zinc-500">
                <span>Sample Initialization Stream</span>
                <span className="text-emerald-400">Daemon Active</span>
              </div>
              <div className="mt-3 space-y-1 text-zinc-400 text-[11px] leading-relaxed">
                <p><span className="text-zinc-500">[init]</span> Initializing Clang diagnostic stream parser...</p>
                <p><span className="text-zinc-500">[init]</span> Ingesting compile_commands.json compilation database</p>
                <p><span className="text-zinc-500">[init]</span> Connected to build stream pipeline</p>
                <p><span className="text-emerald-400">[ready]</span> Listening on /run/user/1000/kernova.sock (local IPC)</p>
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-start">
            <div className="md:col-span-5">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                02 · Diagnostic Ingestion
              </span>
              <h3 className="mt-1 text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Compiler Ingestion Matrix
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Kernova reads structured machine output directly from GCC and Clang rather than scraping arbitrary terminal text.
              </p>
            </div>

            <div className="md:col-span-7 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs">
                  <thead>
                    <tr className="border-b border-zinc-200 pb-2 text-zinc-500 dark:border-zinc-800 text-[11px]">
                      <th className="py-2">Toolchain</th>
                      <th className="py-2">Interface</th>
                      <th className="py-2">Format</th>
                      <th className="py-2">Target</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 text-zinc-600 dark:divide-zinc-800 dark:text-zinc-400">
                    <tr>
                      <td className="py-2 font-medium text-zinc-900 dark:text-zinc-100">GCC</td>
                      <td className="py-2">-fdiagnostics-format=json</td>
                      <td className="py-2">SARIF / JSON</td>
                      <td className="py-2">Macro-expanded</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-zinc-900 dark:text-zinc-100">Clang</td>
                      <td className="py-2">JSON Diagnostics</td>
                      <td className="py-2">Structured AST</td>
                      <td className="py-2">Source AST Nodes</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-zinc-900 dark:text-zinc-100">CMake</td>
                      <td className="py-2">CMake File-API (v1)</td>
                      <td className="py-2">Target JSON</td>
                      <td className="py-2">Graph-Level</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-zinc-900 dark:text-zinc-100">Ninja</td>
                      <td className="py-2">.ninja_log / stdout pipe</td>
                      <td className="py-2">Log Stream</td>
                      <td className="py-2">Process Times</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Pillar 3 */}
          <div id="privacy" className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-6 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-8">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              <Lock className="h-3.5 w-3.5 text-zinc-500" />
              <span>03 · Privacy Principles</span>
            </div>
            <h3 className="mt-2 text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Local-First Code Privacy
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Systems software often involves sensitive proprietary logic. Kernova is designed with local-first processing as a core constraint:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 text-xs">
              <div className="rounded-lg border border-zinc-200 bg-white p-3.5 dark:border-zinc-800 dark:bg-zinc-900">
                <strong className="text-zinc-900 dark:text-zinc-100">Local Processing</strong>
                <p className="mt-1 text-zinc-500 leading-relaxed">
                  AST parsing and build graph evaluations execute locally on user hardware.
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-white p-3.5 dark:border-zinc-800 dark:bg-zinc-900">
                <strong className="text-zinc-900 dark:text-zinc-100">No Source Telemetry</strong>
                <p className="mt-1 text-zinc-500 leading-relaxed">
                  Source code files and repository contents are not transmitted to external cloud servers.
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-white p-3.5 dark:border-zinc-800 dark:bg-zinc-900">
                <strong className="text-zinc-900 dark:text-zinc-100">Offline Operation</strong>
                <p className="mt-1 text-zinc-500 leading-relaxed">
                  Designed to operate effectively in air-gapped workstations and corporate private networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center border-t border-zinc-200/80 dark:border-zinc-850">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Technical feedback welcome
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Discuss compiler internals, AST parsers, and Linux system design with our engineering team.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
              >
                <span>Contact Engineering</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
