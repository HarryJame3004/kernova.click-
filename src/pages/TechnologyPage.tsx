import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Terminal, 
  Layers, 
  Shield, 
  Lock, 
  ArrowRight, 
  Check, 
  ArrowUpRight,
  Workflow,
  FileCode,
  Binary,
  GitBranch,
  Server
} from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';
import { ScrollProgressBar } from '../components/ui/ScrollProgressBar';

export const TechnologyPage: React.FC = () => {
  const [activeArchLayer, setActiveArchLayer] = useState<'layer1' | 'layer2' | 'layer3'>('layer2');

  const archLayers = {
    layer1: {
      tag: 'LAYER 01 · HOST HOOKS',
      title: 'Toolchain Ingestion Layer',
      status: 'Implemented Prototype',
      overview: 'Non-invasive interception of compiler diagnostic streams, CMake configuration targets, and Ninja build logs on standard Linux environments.',
      components: [
        { name: 'GCC Hook', detail: 'Ingests structured JSON output via -fdiagnostics-format=json (GCC 10-14).' },
        { name: 'Clang Visitor', detail: 'Ingests LibClang machine diagnostics and source AST definitions.' },
        { name: 'CMake File-API', detail: 'Reads .cmake/api/v1/query target graphs directly from the build directory.' },
        { name: 'Ninja Pipe Monitor', detail: 'Monitors the build FIFO and .ninja_log for real-time target latency profiling.' },
      ],
      dataContract: 'Emits normalized DiagnosticRecord events over local POSIX stream socket.',
    },
    layer2: {
      tag: 'LAYER 02 · LOCAL DAEMON',
      title: 'Core Engine (kernovad)',
      status: 'In Active Engineering',
      overview: 'A lightweight daemon executing locally on the host machine. Responsible for AST symbol normalization, constraint tree matching, and patch synthesis.',
      components: [
        { name: 'AST Symbol Normalizer', detail: 'Decodes mangled symbol names and normalizes template candidate constraint trees.' },
        { name: 'Build Graph Correlator', detail: 'Calculates the critical path latency and identifies serial build bottlenecks.' },
        { name: 'Remediation Synthesizer', detail: 'Generates unified line diffs restoring constraint compatibility.' },
        { name: 'Local Privacy Guard', detail: 'Enforces local memory isolation; ensures zero source code leaves the host.' },
      ],
      dataContract: 'Executes locally in host memory with sub-millisecond UNIX domain socket IPC.',
    },
    layer3: {
      tag: 'LAYER 03 · PRESENTATION',
      title: 'Developer Interface Layer',
      status: 'Design Proposal & Prototype',
      overview: 'Presentation surfaces designed to fit seamlessly into terminal-first and GUI development environments on Linux.',
      components: [
        { name: 'kernova-cli', detail: 'Terminal utility providing interactive colorized diffs and error explanations directly in tmux/PTY.' },
        { name: 'Kernova Workspace GUI', detail: 'Standalone desktop interface offering multi-panel diagnostic and build graph inspection.' },
        { name: 'LSP Bridge', detail: 'Language Server Protocol bridge serving diagnostics directly to Neovim and VS Code.' },
        { name: 'CI/CD Reporter', detail: 'Generates SARIF diagnostic artifacts for automated GitHub Actions and GitLab pipelines.' },
      ],
      dataContract: 'Consumes standard JSON-RPC protocol over UNIX socket or stdio.',
    },
  };

  return (
    <div className="flex flex-col bg-zinc-950 text-zinc-100 min-h-screen">
      <ScrollProgressBar />
      <SEOHead
        title="Engineering Architecture — KERNOVA"
        description="Discover Kernova's engineering approach: Linux-first tooling, GCC & Clang diagnostics, modular architecture, local privacy, and deterministic analysis."
        canonicalPath="/technology"
      />

      {/* Header */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-20 border-b border-zinc-900 bg-grid-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/80 text-[11px] font-mono text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>SYSTEM ARCHITECTURE</span>
              <span className="text-zinc-600">/</span>
              <span>ENGINEERING BLUEPRINT</span>
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 [text-wrap:balance]">
              Deterministic compiler analysis on Linux.
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-400 [text-wrap:balance]">
              Kernova is architected for systems developers who demand reproducible diagnostics, native command-line integration, and local source confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive 3-Tier Architecture Explorer */}
      <section className="py-20 sm:py-28 border-b border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              System Topology
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Three-Tier Modular Architecture
            </h2>
            <p className="mt-3 text-sm text-zinc-400">
              Click a layer below to inspect component boundaries, communication protocols, and implementation status.
            </p>
          </div>

          {/* Layer Selector Bar */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {(['layer1', 'layer2', 'layer3'] as const).map((lKey) => {
              const layer = archLayers[lKey];
              const isSelected = activeArchLayer === lKey;
              return (
                <button
                  key={lKey}
                  onClick={() => setActiveArchLayer(lKey)}
                  className={`text-left p-5 rounded-xl border transition-all ${
                    isSelected
                      ? 'border-cyan-500/70 bg-zinc-900/90 shadow-lg shadow-cyan-950/20'
                      : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/50'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className={`font-bold ${isSelected ? 'text-cyan-400' : 'text-zinc-500'}`}>
                      {layer.tag}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 text-[10px]">
                      {layer.status}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-zinc-100">
                    {layer.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-400 line-clamp-2">
                    {layer.overview}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Layer Deep Dive Card */}
          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-cyan-400">
                  {archLayers[activeArchLayer].tag}
                </span>
                <h3 className="text-xl font-bold text-zinc-100 mt-1">
                  {archLayers[activeArchLayer].title}
                </h3>
              </div>
              <div className="font-mono text-xs px-3 py-1 rounded bg-zinc-800 border border-zinc-700 text-zinc-300">
                Status: {archLayers[activeArchLayer].status}
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {archLayers[activeArchLayer].overview}
            </p>

            <div className="mt-6">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Component Subsystems
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                {archLayers[activeArchLayer].components.map((comp, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-950">
                    <div className="font-bold text-zinc-200">{comp.name}</div>
                    <div className="mt-1 text-[11px] text-zinc-400 leading-relaxed font-sans">{comp.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 font-mono text-xs text-zinc-400 flex items-center justify-between">
              <span>Data Protocol: {archLayers[activeArchLayer].dataContract}</span>
              <span className="text-cyan-400">POSIX IPC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Compiler Ingestion Matrix & Protocol Comparison */}
      <section className="py-20 sm:py-28 border-b border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              Ingestion Protocol
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Compiler Diagnostic Ingestion Matrix
            </h2>
            <p className="mt-3 text-sm text-zinc-400">
              Kernova ingests machine-readable structured output formats directly from host build tools.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-zinc-800 pb-3 text-zinc-500 text-[11px]">
                  <th className="py-3 px-4">Toolchain</th>
                  <th className="py-3 px-4">Capture Interface</th>
                  <th className="py-3 px-4">Ingestion Format</th>
                  <th className="py-3 px-4">AST Fidelity</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80 text-zinc-300">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-zinc-100">GCC</td>
                  <td className="py-3.5 px-4 text-zinc-400">-fdiagnostics-format=json</td>
                  <td className="py-3.5 px-4 text-zinc-400">SARIF / JSON Stream</td>
                  <td className="py-3.5 px-4 text-cyan-400">Macro-Expanded AST</td>
                  <td className="py-3.5 px-4 text-emerald-400">Supported</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-zinc-100">Clang</td>
                  <td className="py-3.5 px-4 text-zinc-400">JSON Diagnostics / LibClang</td>
                  <td className="py-3.5 px-4 text-zinc-400">C-API AST Nodes</td>
                  <td className="py-3.5 px-4 text-cyan-400">Source-Level AST</td>
                  <td className="py-3.5 px-4 text-emerald-400">Supported</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-zinc-100">CMake</td>
                  <td className="py-3.5 px-4 text-zinc-400">CMake File-API (v1)</td>
                  <td className="py-3.5 px-4 text-zinc-400">Target JSON Model</td>
                  <td className="py-3.5 px-4 text-amber-400">Graph-Level</td>
                  <td className="py-3.5 px-4 text-cyan-400">In Development</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-zinc-100">Ninja</td>
                  <td className="py-3.5 px-4 text-zinc-400">.ninja_log / stdout pipe</td>
                  <td className="py-3.5 px-4 text-zinc-400">Execution Log Stream</td>
                  <td className="py-3.5 px-4 text-amber-400">Wall-Clock Latency</td>
                  <td className="py-3.5 px-4 text-cyan-400">In Development</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Local-First Privacy Specification */}
      <section id="privacy" className="py-20 sm:py-28 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 sm:p-12">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400">
              <Lock className="h-4 w-4" />
              <span>DATA MINIMIZATION & PRIVACY COMMITMENT</span>
            </div>

            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-zinc-100">
              Local-First Processing by Design
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-zinc-400 max-w-3xl leading-relaxed">
              Industrial systems code contains critical proprietary logic, algorithmic cores, and embedded trade secrets. Kernova is designed with local-first boundaries as a hard constraint:
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
                <div className="font-bold text-zinc-100">Local AST Execution</div>
                <p className="mt-2 text-zinc-400 font-sans text-xs leading-relaxed">
                  Compiler AST traversal, symbol normalization, and build profiling execute entirely in local host memory.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
                <div className="font-bold text-zinc-100">Zero Code Telemetry</div>
                <p className="mt-2 text-zinc-400 font-sans text-xs leading-relaxed">
                  Source code files, variable names, and repository history are never uploaded to remote servers without explicit user initiation.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
                <div className="font-bold text-zinc-100">Air-Gapped Operation</div>
                <p className="mt-2 text-zinc-400 font-sans text-xs leading-relaxed">
                  The core diagnostic engine operates normally in air-gapped workstations, corporate VPNs, and offline build servers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech CTA */}
      <section className="py-16 text-center border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-100">
            Have questions about our Linux compiler architecture?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            Discuss LibClang bindings, AST normalizers, and POSIX IPC with our engineering team.
          </p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-5 py-2.5 text-xs font-semibold text-zinc-950 hover:bg-white transition-colors"
            >
              <span>Contact Engineering</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
