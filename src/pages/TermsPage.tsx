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

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Home</span>
          </Link>

          {/* Draft Notice Banner */}
          <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-800 dark:text-amber-300">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
              <div>
                <strong className="text-xs font-bold uppercase tracking-wider">
                  Draft Legal Document — Subject to Review Before Publication
                </strong>
                <p className="mt-1 text-xs leading-relaxed opacity-90">
                  This document is a preliminary operational draft reflecting the early-stage prototype status of Kernova. It is intended for review and does not constitute final binding legal terms.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Terms of Service
            </h1>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Last updated: October 2026 · Working Draft
            </p>
          </div>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                1. Acceptance of Terms & Project Stage
              </h2>
              <p className="mt-2">
                By accessing this website (kernova.click) or participating in early testing of the Kernova Developer Workspace, you acknowledge that Kernova is an independent early-stage software project actively developing its initial MVP.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                2. Prototype & Pre-Release Disclaimer
              </h2>
              <p className="mt-2">
                All software builds, code previews, and command-line utilities provided during early testing are experimental prototypes. They are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including fitness for a particular purpose or error-free operation.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                3. Intellectual Property Rights
              </h2>
              <p className="mt-2">
                The name "KERNOVA", the Kernova logo, website architecture, and proprietary diagnostic algorithms developed by Kernova remain the intellectual property of the project founders. You retain full and exclusive ownership of all code, build configurations, and intellectual property stored on your computer or evaluated through the software.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                4. Acceptable Use
              </h2>
              <p className="mt-2">
                You agree not to reverse engineer, decompile, or tamper with pre-release binaries beyond standard security testing, nor attempt unauthorized access to project infrastructure or communications.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                5. Limitation of Liability
              </h2>
              <p className="mt-2">
                To the maximum extent permitted by applicable law, Kernova and its founders shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use experimental pre-release software.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                6. Contact & Legal Notices
              </h2>
              <p className="mt-2">
                All legal notices and questions regarding these draft terms should be directed to:
              </p>
              <p className="mt-2 font-mono text-xs font-semibold text-violet-600 dark:text-violet-400">
                contact@kernova.click
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
