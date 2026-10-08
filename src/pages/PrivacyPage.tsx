import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Shield, ArrowLeft } from 'lucide-react';
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
                  Draft Legal Document — Pending Legal Review Before Public Commercial Launch
                </strong>
                <p className="mt-1 text-xs leading-relaxed opacity-90">
                  This document represents an initial informational draft reflecting Kernova's technical architecture and data minimization philosophy. It does not constitute formal legal counsel and will be updated upon formal commercial release.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Privacy Policy
            </h1>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Last updated: October 2026 · Working Draft
            </p>
          </div>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                1. Overview & Architectural Commitments
              </h2>
              <p className="mt-2">
                KERNOVA ("we", "our", or "the project") is developing developer productivity tooling for Linux systems programming, including the Kernova Developer Workspace. We believe that developer privacy is a fundamental engineering requirement, not an optional preference.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                2. Source Code & Diagnostic Data Isolation
              </h2>
              <p className="mt-2">
                Our core technical design is built around the following boundaries:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                <li>
                  <strong>Local-First Processing:</strong> Compiler diagnostics, Clang AST representations, and build logs are processed locally by the Kernova daemon running on your host Linux environment.
                </li>
                <li>
                  <strong>No Hidden Code Uploads:</strong> We do not transmit your proprietary source files, variable names, syntax trees, or git repository history to any external cloud service without explicit, conscious user consent.
                </li>
                <li>
                  <strong>Air-Gapped Compatibility:</strong> The core diagnostic engine is designed to operate completely without internet access.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                3. Website & Communications Data
              </h2>
              <p className="mt-2">
                When you visit our website (kernova.click) or contact us via email:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                <li>
                  <strong>Direct Inquiries:</strong> If you send an email to <code className="font-mono text-[11px]">contact@kernova.click</code>, we retain your email address and message content solely to communicate with you regarding your inquiry, feedback, or alpha testing participation.
                </li>
                <li>
                  <strong>No Commercial Sale of Data:</strong> We never sell, rent, or trade your contact details to third-party data brokers or marketing services.
                </li>
                <li>
                  <strong>Website Telemetry:</strong> We do not employ intrusive tracking pixels or third-party fingerprinting scripts.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                4. Data Security
              </h2>
              <p className="mt-2">
                While no electronic transmission or local environment is 100% impenetrable, we follow standard security practices and avoid unnecessary remote data collection to minimize any potential exposure.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                5. Questions & Updates
              </h2>
              <p className="mt-2">
                If you have questions regarding this draft policy or our privacy architecture, please contact us at:
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
