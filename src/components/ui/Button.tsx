/**
 * @fileoverview Button component - Primary UI component for user interactions
 * @see {@link docs/CONSISTENCY_ROADMAP.md} Component Standards
 * @see {@link docs/PHASE3_COMPLETION.md} Quality Assurance Setup
 *
 * CONTEXT_ANCHOR: This component establishes the standard pattern for:
 * - React.forwardRef usage for proper ref handling
 * - TypeScript interface extending React.ComponentProps
 * - clsx utility for conditional styling
 * - Comprehensive accessibility features
 * - Loading and disabled states
 * - Size and variant customization
 */

import React from 'react';
import { cn } from '@/src/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      fullWidth = false,
      className,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) return;
      onClick?.(event);
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        onClick={handleClick}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-lg font-medium',
          'transition-colors duration-200 ease-in-out',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',

          // Variant styles
          {
            'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500':
              variant === 'primary',
            'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-primary-500':
              variant === 'secondary',
            'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-primary-500':
              variant === 'outline',
            'text-gray-700 hover:bg-gray-50 focus:ring-primary-500':
              variant === 'ghost',
            'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500':
              variant === 'danger',
          },

          // Size styles
          {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },

          // Full width
          {
            'w-full': fullWidth,
          },

          className
        )}
        {...props}
      >
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };