import React, { useState } from 'react';
import { Terminal, Cpu, Check, Layers } from 'lucide-react';

interface Stage {
  number: string;
  title: string;
  subtitle: string;
  detail: string;
  mechanism: string;
}

const stages: Stage[] = [
  {
    number: '01',
    title: 'Invocation',
    subtitle: 'Standard Build Tools',
    detail: 'Developer invokes CMake, Ninja, Make, or raw GCC/Clang commands as usual. Zero migration to proprietary build formats required.',
    mechanism: 'Process execution stream captured via standard compiler flags (-fdiagnostics-format=json) or build FIFO.',
  },
  {
    number: '02',
    title: 'Daemon Capture',
    subtitle: 'Local UNIX Socket',
    detail: 'The lightweight background daemon captures diagnostic outputs, linker errors, and sanitizer reports instantaneously.',
    mechanism: 'Local UNIX domain socket IPC (/run/user/$UID/kernova.sock) with zero external network dependency.',
  },
  {
    number: '03',
    title: 'AST Correlation',
    subtitle: 'Structural Analysis',
    detail: 'Instead of parsing raw strings with fragile regexes, Kernova maps diagnostic symbols directly to Clang AST nodes and CMake target graphs.',
    mechanism: 'AST symbol normalizer and CMake File-API target query evaluator.',
  },
  {
    number: '04',
    title: 'Actionable Patch',
    subtitle: 'Line-by-Line Diff',
    detail: 'Nested template failures and symbol collisions are synthesized into single-point root causes paired with verifiable patch diffs.',
    mechanism: 'Deterministic diagnostic rule matching supplemented by local model comprehension.',
  },
];

export const WorkflowDiagram: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="w-full rounded-xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-8">
      {/* Header */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
            Diagnostic Pipeline
          </span>
          <h3 className="mt-1 text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-xl">
            From raw compiler spew to concise resolution
          </h3>
        </div>
        <div className="font-mono text-xs text-zinc-400">
          <span>Click a stage to inspect mechanism</span>
        </div>
      </div>

      {/* Horizontal Pipeline Steps */}
      <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage, idx) => {
          const isSelected = activeStage === idx;
          return (
            <button
              key={stage.number}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`group flex flex-col text-left rounded-lg p-3.5 transition-all border ${
                isSelected
                  ? 'border-zinc-900 bg-zinc-50 shadow-xs dark:border-zinc-200 dark:bg-zinc-800/80'
                  : 'border-zinc-200/80 bg-zinc-50/50 hover:border-zinc-300 dark:border-zinc-800/70 dark:bg-zinc-900/30 dark:hover:border-zinc-750'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  {stage.number}
                </span>
                {isSelected && (
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                )}
              </div>
              <h4 className="mt-2 text-xs font-bold text-zinc-900 dark:text-zinc-100">
                {stage.title}
              </h4>
              <p className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
                {stage.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Panel */}
      <div className="mt-5 rounded-lg border border-zinc-200/90 bg-zinc-50/70 p-4 dark:border-zinc-800/80 dark:bg-zinc-950/60">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
              <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                Stage {stages[activeStage].number}: {stages[activeStage].title}
              </span>
              <span>·</span>
              <span>{stages[activeStage].subtitle}</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
              {stages[activeStage].detail}
            </p>
          </div>

          <div className="rounded-md border border-zinc-200 bg-white p-3 md:w-80 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
              <Cpu className="h-3.5 w-3.5 text-zinc-500" />
              <span>Linux System Mechanism</span>
            </div>
            <p className="mt-1 font-mono text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
              {stages[activeStage].mechanism}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
