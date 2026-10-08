import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-50/50 py-12 transition-colors duration-150 dark:border-zinc-850 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block" aria-label="KERNOVA Home">
              <BrandLogo size="sm" />
            </Link>
            <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              Build Beyond Limits.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              Linux-first developer workspace for C/C++ build workflows, compiler diagnostics, and debugging.
            </p>
            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-zinc-500">
              <span>kernova.click</span>
              <span>·</span>
              <a
                href="mailto:contact@kernova.click"
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                contact@kernova.click
              </a>
            </div>
          </div>

          {/* Navigation - Product */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Product
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              <li>
                <Link to="/product" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  Overview & Capabilities
                </Link>
              </li>
              <li>
                <Link to="/technology" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  System Architecture
                </Link>
              </li>
              <li>
                <Link to="/technology#privacy" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  Privacy Principles
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Project
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              <li>
                <Link to="/about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  About Kernova
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  5-Phase Roadmap
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  Contact Alpha Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Status & Legal */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Status & Legal
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-zinc-500">
              Kernova is currently an early-stage startup developing its initial MVP prototype.
            </p>
            <div className="mt-3 space-y-1.5 text-xs text-zinc-500">
              <div>
                <Link to="/privacy" className="hover:text-zinc-900 dark:hover:text-zinc-100 underline transition-colors">
                  Privacy Policy (Draft)
                </Link>
              </div>
              <div>
                <Link to="/terms" className="hover:text-zinc-900 dark:hover:text-zinc-100 underline transition-colors">
                  Terms of Service (Draft)
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-zinc-200/80 pt-6 sm:flex-row dark:border-zinc-850 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} KERNOVA. All rights reserved.</p>
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span>Linux-First C/C++ Developer Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
