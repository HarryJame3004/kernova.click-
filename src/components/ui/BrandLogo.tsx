import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
}) => {
  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const textSizes = {
    sm: 'text-xs tracking-[0.2em]',
    md: 'text-sm tracking-[0.22em]',
    lg: 'text-base tracking-[0.25em]',
  };

  return (
    <div className={`flex items-center gap-2.5 font-mono select-none ${className}`}>
      {/* Distinctive Geometric Kernova Mark */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-zinc-900 dark:text-zinc-100 transition-colors"
          aria-hidden="true"
        >
          {/* Outer technical hexagon / kernel facet */}
          <rect
            x="2"
            y="2"
            width="28"
            height="28"
            rx="6"
            className="stroke-zinc-300 dark:stroke-zinc-800"
            strokeWidth="1.5"
            fill="transparent"
          />
          {/* Geometric K glyph with compiler bracket dynamics */}
          <path
            d="M10 8V24"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M22 9L13 16L22 23"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Subtle technical focal node */}
          <circle
            cx="13"
            cy="16"
            r="1.75"
            className="fill-violet-600 dark:fill-violet-400"
          />
        </svg>
      </div>

      {showWordmark && (
        <span className={`font-bold font-mono text-zinc-900 dark:text-zinc-100 uppercase ${textSizes[size]}`}>
          KERNOVA
        </span>
      )}
    </div>
  );
};
