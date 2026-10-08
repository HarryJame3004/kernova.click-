import React, { useState } from 'react';
import { Terminal, Cpu, GitBranch, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface Stage {
  number: string;
  title: string;
  subtitle: string;
  detail: string;
  linuxNative: string;
}

const stages: Stage[] = [
  {
    number: '01',
    title: 'Code & Invocation',
    subtitle: 'Standard Linux Build Tools',
    detail: 'Developer invokes existing build scripts via CMake, Ninja, Make, or raw GCC/Clang. Zero proprietary build systems required.',
    linuxNative: 'POSIX process interception via LD_PRELOAD or compiler wrapper flags (-fdiagnostics-format=json).',
  },
  {
    number: '02',
    title: 'Diagnostic Capture',
    subtitle: 'Local Daemon Socket',
    detail: 'The lightweight background daemon captures compiler errors, warnings, linker failures, and runtime sanitizer output instantaneously.',
    linuxNative: 'UNIX domain socket communication. Ultra-low latency (<2ms overhead), zero internet dependency.',
  },
  {
    number: '03',
    title: 'AST & Graph Correlation',
    subtitle: 'Structural Parsing',
    detail: 'Rather than treating errors as raw unstructured strings, Kernova maps diagnostics to the Clang AST and CMake dependency graph.',
    linuxNative: 'Direct LibClang integration and CMake File-API query parser.',
  },
  {
    number: '04',
    title: 'Demystified Remediation',
    subtitle: 'Actionable Developer Guidance',
    detail: 'Cryptic C++ template cascades and opaque linker symbol collisions are condensed into single-sentence causes with verifiable patch diffs.',
    linuxNative: 'Deterministic rule engine first, supplemented by localized private language model inference.',
  },
];

export const WorkflowDiagram: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-8">
      {/* Editorial Title */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
            Pipeline Architecture
          </span>
          <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
            From Cryptic Compiler Output to Actionable Fix
          </h3>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400">
          <span>Click a stage to inspect mechanism</span>
        </div>
      </div>

      {/* Interactive Horizontal Pipeline */}
      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage, idx) => {
          const isSelected = activeStage === idx;
          return (
            <button
              key={stage.number}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`group relative flex flex-col text-left rounded-xl p-4 transition-all duration-200 border ${
                isSelected
                  ? 'border-violet-600/70 bg-violet-50/50 shadow-sm dark:border-violet-500/70 dark:bg-violet-950/30'
                  : 'border-slate-200/90 bg-slate-50/50 hover:border-slate-300 dark:border-slate-800/80 dark:bg-slate-950/40 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-violet-600 dark:text-violet-400">
                  {stage.number}
                </span>
                {isSelected && (
                  <CheckCircle2 className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                )}
              </div>
              <h4 className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                {stage.title}
              </h4>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {stage.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Detailed Stage Deep Dive */}
      <div className="mt-6 rounded-xl border border-slate-200/80 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-950/70">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-violet-600 dark:text-violet-400">
                Stage {stages[activeStage].number}
              </span>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {stages[activeStage].title}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {stages[activeStage].detail}
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-3.5 md:w-80 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <Cpu className="h-3.5 w-3.5 text-cyan-500" />
              <span>Linux System Mechanism</span>
            </div>
            <p className="mt-1.5 font-mono text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              {stages[activeStage].linuxNative}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
