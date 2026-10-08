import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
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
    xl: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-xs tracking-[0.2em]',
    md: 'text-sm tracking-[0.22em]',
    lg: 'text-base tracking-[0.24em]',
    xl: 'text-lg tracking-[0.26em]',
  };

  return (
    <div className={`flex items-center gap-2.5 font-mono select-none ${className}`}>
      {/* Distinctive Kernova Emblem: Precision Kernel Core + Nova Vector */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-zinc-950 dark:text-zinc-50 transition-colors"
          aria-hidden="true"
        >
          {/* Structural chassis with 45-degree chamfers */}
          <path
            d="M8 3H24L29 8V24L24 29H8L3 24V8L8 3Z"
            className="stroke-zinc-300 dark:stroke-zinc-800 transition-colors"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />

          {/* Left vertical trunk: Root Linux kernel pillar */}
          <path
            d="M10 8V24"
            className="stroke-zinc-900 dark:stroke-zinc-100"
            strokeWidth="2.25"
            strokeLinecap="round"
          />

          {/* Upper chevron beam: Compiler parsing vector */}
          <path
            d="M22 9L12.5 16"
            className="stroke-zinc-900 dark:stroke-zinc-100"
            strokeWidth="2.25"
            strokeLinecap="round"
          />

          {/* Lower chevron beam: AST remediation vector */}
          <path
            d="M12.5 16L22 23"
            className="stroke-cyan-600 dark:stroke-cyan-400"
            strokeWidth="2.25"
            strokeLinecap="round"
          />

          {/* Precision focal nucleus: The synthesis point */}
          <circle
            cx="12.5"
            cy="16"
            r="1.75"
            className="fill-cyan-500 dark:fill-cyan-400"
          />
        </svg>
      </div>

      {showWordmark && (
        <span className={`font-extrabold font-mono text-zinc-900 dark:text-zinc-50 uppercase ${textSizes[size]}`}>
          KERNOVA
        </span>
      )}
    </div>
  );
};
