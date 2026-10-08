import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';
import { ScrollProgressBar } from '../components/ui/ScrollProgressBar';

export const TermsPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <ScrollProgressBar />
      <SEOHead
        title="Terms of Service (Draft for Review) — KERNOVA"
        description="Draft terms of service for Kernova website and prototype software. Subject to legal review before commercial publication."
        canonicalPath="/terms"
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
          <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-zinc-800 dark:border-zinc-850 dark:bg-zinc-900/60 dark:text-zinc-300">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
              <div>
                <strong className="text-xs font-mono font-bold uppercase tracking-wider block">
                  Draft Document · Subject to Legal Review
                </strong>
                <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  This document is a preliminary operational draft reflecting the early-stage prototype status of Kernova. It does not constitute final binding commercial terms.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
              Terms of Service
            </h1>
            <p className="mt-1.5 text-xs font-mono text-zinc-500">
              Last updated: October 2026 · Working Draft
            </p>
          </div>

          <div className="mt-8 space-y-6 text-xs sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <section>
              <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                1. Acceptance & Early-Stage Status
              </h2>
              <p className="mt-1.5 text-zinc-600 dark:text-zinc-400">
                By accessing this website (kernova.click) or participating in early testing of the Kernova Developer Workspace, you acknowledge that Kernova is an independent early-stage software project actively developing its initial MVP.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                2. Pre-Release Software Disclaimer
              </h2>
              <p className="mt-1.5 text-zinc-600 dark:text-zinc-400">
                All preview software builds, command-line utilities, and prototype interfaces are experimental and provided on an "as is" basis for evaluation and feedback purposes.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                3. Intellectual Property Rights
              </h2>
              <p className="mt-1.5 text-zinc-600 dark:text-zinc-400">
                You retain full and exclusive ownership of all source code, build targets, and intellectual property analyzed on your computer. The name "KERNOVA" and the workspace interface are the intellectual property of Kernova.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                4. Contact & Inquiries
              </h2>
              <p className="mt-1.5 text-zinc-600 dark:text-zinc-400">
                For questions regarding these draft terms, contact: <span className="font-mono text-zinc-900 dark:text-zinc-200">contact@kernova.click</span>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
