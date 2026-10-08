import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { BrandLogo } from '../ui/BrandLogo';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', path: '/' },
    { label: 'Product', path: '/product' },
    { label: 'Technology', path: '/technology' },
    { label: 'About', path: '/about' },
    { label: 'Roadmap', path: '/roadmap' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/85 backdrop-blur-md transition-colors duration-150 dark:border-zinc-800/80 dark:bg-zinc-950/85">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark (Single element) */}
        <Link
          to="/"
          className="group flex items-center transition-opacity hover:opacity-90"
          aria-label="KERNOVA Home"
        >
          <BrandLogo size="md" />
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 text-[13px] font-medium"
          aria-label="Main Navigation"
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `transition-colors duration-150 ${
                  isActive
                    ? 'text-zinc-900 font-semibold dark:text-white'
                    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Actions & Theme Toggle */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 bg-transparent text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
          >
            {theme === 'dark' ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center gap-1 rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white whitespace-nowrap shadow-xs"
          >
            <span>Early Access</span>
            <ArrowUpRight className="h-3 w-3 opacity-70" />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 text-zinc-600 md:hidden dark:border-zinc-800 dark:text-zinc-400"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-200 bg-white/98 px-4 py-3 backdrop-blur-lg md:hidden dark:border-zinc-800 dark:bg-zinc-950/98">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 text-xs font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-zinc-100 text-zinc-900 font-semibold dark:bg-zinc-900 dark:text-white'
                      : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-1.5 rounded-md bg-zinc-900 py-2 text-xs font-medium text-white transition-colors dark:bg-zinc-100 dark:text-zinc-900"
              >
                <span>Request Early Access</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
