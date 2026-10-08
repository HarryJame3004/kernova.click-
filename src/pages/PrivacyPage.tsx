import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';
import { ScrollProgressBar } from '../components/ui/ScrollProgressBar';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <ScrollProgressBar />
      <SEOHead
        title="Privacy Policy (Draft for Review) — KERNOVA"
        description="Draft privacy policy for Kernova and the Kernova Developer Workspace. Transparent data handling principles for early-stage development."
        canonicalPath="/privacy"
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            <span>Return to Overview</span>
          </Link>

          {/* Draft Notice Banner */}
          <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
              <div>
                <strong className="text-xs font-mono font-bold uppercase tracking-wider block">
                  Draft Document · Subject to Legal Review
                </strong>
                <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  This document represents an initial informational draft reflecting Kernova's technical architecture and data minimization philosophy prior to formal commercial release.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
              Privacy Policy
            </h1>
            <p className="mt-1.5 text-xs font-mono text-zinc-500">
              Last updated: October 2026 · Working Draft
            </p>
          </div>

          <div className="mt-8 space-y-6 text-xs sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <section>
              <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                1. Overview & Architectural Commitments
              </h2>
              <p className="mt-1.5 text-zinc-600 dark:text-zinc-400">
                KERNOVA ("we", "our", or "the project") is developing developer productivity tooling for Linux systems programming. We believe developer privacy is a fundamental engineering requirement.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                2. Source Code & Diagnostic Data Isolation
              </h2>
              <p className="mt-1.5 text-zinc-600 dark:text-zinc-400">
                Our core technical design is built around the following boundaries:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-zinc-600 dark:text-zinc-400 text-xs">
                <li>
                  <strong>Local-First Processing:</strong> Compiler diagnostics, Clang AST representations, and build logs are processed locally by the Kernova daemon running on your host Linux environment.
                </li>
                <li>
                  <strong>No Source Telemetry:</strong> We do not transmit your proprietary source files, variable names, syntax trees, or git repository history to any external cloud service.
                </li>
                <li>
                  <strong>Air-Gapped Operation:</strong> The diagnostic engine is designed to operate completely without internet access.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                3. Communications Data
              </h2>
              <p className="mt-1.5 text-zinc-600 dark:text-zinc-400">
                When you contact us via email at <code className="font-mono text-xs">contact@kernova.click</code>, we retain your email address and message solely to communicate with you regarding your inquiry, feedback, or alpha testing participation. We do not sell or trade your contact details.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                4. Questions & Inquiries
              </h2>
              <p className="mt-1.5 text-zinc-600 dark:text-zinc-400">
                If you have questions regarding this draft policy, please contact us at: <span className="font-mono text-zinc-900 dark:text-zinc-200">contact@kernova.click</span>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
