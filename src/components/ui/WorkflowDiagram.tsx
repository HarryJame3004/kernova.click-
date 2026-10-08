import React, { useState } from 'react';
import { Terminal, Cpu, Check, Layers, ArrowRight } from 'lucide-react';

interface Stage {
  number: string;
  title: string;
  subtitle: string;
  detail: string;
  mechanism: string;
  inputFormat: string;
  outputFormat: string;
}

const stages: Stage[] = [
  {
    number: '01',
    title: 'Invocation & Hook',
    subtitle: 'Standard Build Tools',
    detail: 'Developer invokes CMake, Ninja, Make, or raw GCC/Clang commands as usual. Zero migration to proprietary build formats or wrappers required.',
    mechanism: 'Process execution stream captured via standard compiler flags (-fdiagnostics-format=json) or non-invasive build FIFO pipes.',
    inputFormat: 'Command line invocations (ninja, make, clang++)',
    outputFormat: 'Structured JSON diagnostic stream',
  },
  {
    number: '02',
    title: 'Daemon Capture',
    subtitle: 'Local UNIX Socket',
    detail: 'The lightweight background daemon captures diagnostic outputs, linker errors, and sanitizer reports instantaneously.',
    mechanism: 'Local UNIX domain socket IPC (/run/user/$UID/kernova.sock) with zero external network dependency.',
    inputFormat: 'UNIX domain stream socket',
    outputFormat: 'Normalized DiagnosticEvent buffer',
  },
  {
    number: '03',
    title: 'AST Correlation',
    subtitle: 'Structural Analysis',
    detail: 'Instead of parsing raw strings with fragile regexes, Kernova maps diagnostic symbols directly to Clang AST nodes and CMake target graphs.',
    mechanism: 'AST symbol normalizer and CMake File-API target query evaluator running in local host memory.',
    inputFormat: 'LibClang AST definitions & target JSON',
    outputFormat: 'Resolved template constraint tree',
  },
  {
    number: '04',
    title: 'Actionable Patch',
    subtitle: 'Line-by-Line Diff',
    detail: 'Nested template failures and symbol collisions are synthesized into single-point root causes paired with verifiable patch diffs.',
    mechanism: 'Deterministic diagnostic rule matching supplemented by local model comprehension.',
    inputFormat: 'Constraint violation node',
    outputFormat: 'Standard unified diff patch',
  },
];

export const WorkflowDiagram: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-xs">
      {/* Header */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            Pipeline Architecture
          </span>
          <h3 className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
            From raw compiler spew to concise resolution
          </h3>
        </div>
        <div className="font-mono text-xs text-zinc-400">
          <span>Click a pipeline stage to inspect data contract</span>
        </div>
      </div>

      {/* Horizontal Pipeline Steps */}
      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage, idx) => {
          const isSelected = activeStage === idx;
          return (
            <button
              key={stage.number}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`group flex flex-col text-left rounded-xl p-4 transition-all border ${
                isSelected
                  ? 'border-cyan-500/70 bg-zinc-900/90 shadow-lg shadow-cyan-950/20'
                  : 'border-zinc-800 bg-zinc-950/40 hover:border-zinc-700 hover:bg-zinc-900/50'
              }`}
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className={`font-bold ${isSelected ? 'text-cyan-400' : 'text-zinc-500'}`}>
                  STAGE {stage.number}
                </span>
                {isSelected && (
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                )}
              </div>
              <h4 className="mt-2.5 text-sm font-bold text-zinc-100">
                {stage.title}
              </h4>
              <p className="mt-0.5 text-xs text-zinc-400 truncate font-sans">
                {stage.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Panel */}
      <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950/80 p-5 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="font-bold text-cyan-400">
                STAGE {stages[activeStage].number}: {stages[activeStage].title}
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">{stages[activeStage].subtitle}</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-zinc-300 font-sans">
              {stages[activeStage].detail}
            </p>

            <div className="pt-2 font-mono text-xs text-zinc-400 space-y-1">
              <div><span className="text-zinc-500">Input:</span> {stages[activeStage].inputFormat}</div>
              <div><span className="text-zinc-500">Output:</span> {stages[activeStage].outputFormat}</div>
            </div>
          </div>

          <div className="md:col-span-5 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 font-mono text-xs">
            <div className="flex items-center gap-1.5 font-bold text-zinc-200 mb-2">
              <Cpu className="h-4 w-4 text-cyan-400" />
              <span>Linux System Mechanism</span>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400 font-sans">
              {stages[activeStage].mechanism}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
