import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 transition-colors duration-200 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Brand & Purpose */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 text-lg font-bold text-slate-900 dark:text-white">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-violet-600 to-indigo-600 text-xs font-bold text-white">
                K
              </span>
              <span className="font-mono text-base tracking-wider">KERNOVA</span>
            </Link>
            <p className="mt-3 text-xs font-medium text-violet-600 dark:text-violet-400">
              Build Beyond Limits.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Developing a Linux-first developer workspace for C/C++ build workflows, compiler diagnostics, and debugging assistance.
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <Globe className="h-3.5 w-3.5 text-slate-400" />
                <span>kernova.click</span>
              </span>
              <span>·</span>
              <a
                href="mailto:contact@kernova.click"
                className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-slate-400" />
                <span>contact@kernova.click</span>
              </a>
            </div>
          </div>

          {/* Navigation - Product & Tech */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Product & Technology
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/product" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  Developer Workspace
                </Link>
              </li>
              <li>
                <Link to="/product#compiler-diagnostics" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  Compiler Diagnostics
                </Link>
              </li>
              <li>
                <Link to="/product#build-workflows" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  C/C++ Build Orchestration
                </Link>
              </li>
              <li>
                <Link to="/technology" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  Linux-First Architecture
                </Link>
              </li>
              <li>
                <Link to="/technology#privacy" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  Developer Privacy Principles
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Roadmap */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Startup & Progress
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/about" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  About Kernova
                </Link>
              </li>
              <li>
                <Link to="/about#mission" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  Mission & Philosophy
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  Engineering Roadmap
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  Inquiries & Early Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Status Notice */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Early Stage Status
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Kernova is currently in its early-stage research and MVP prototype phase. All preview interfaces represent concepts and active development goals.
            </p>
            <div className="mt-4 space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <div>
                <Link to="/privacy" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors underline">
                  Privacy Policy (Draft)
                </Link>
              </div>
              <div>
                <Link to="/terms" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors underline">
                  Terms of Service (Draft)
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row dark:border-slate-800/80">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} KERNOVA. All rights reserved. Built for Linux systems engineers.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-mono text-[11px] text-slate-400 dark:text-slate-400">
              Domain: kernova.click
            </span>
            <span>·</span>
            <Link to="/contact" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors inline-flex items-center gap-1">
              <span>Contact Alpha Team</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
