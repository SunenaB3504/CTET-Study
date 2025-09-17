/**
 * @fileoverview Card component - Content container with header and variants
 * @see {@link docs/CONSISTENCY_ROADMAP.md} Component Standards
 * @see {@link docs/PHASE3_COMPLETION.md} Quality Assurance Setup
 *
 * CONTEXT_ANCHOR: This component establishes the pattern for:
 * - Content containers with optional headers
 * - Multiple visual variants (default, elevated, outlined, filled)
 * - Flexible padding system
 * - Header actions support
 * - Conditional rendering patterns
 */

import React from 'react';
import { cn } from '@/src/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  headerAction?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      title,
      subtitle,
      children,
      variant = 'default',
      padding = 'md',
      headerAction,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'rounded-lg bg-white',

          // Variant styles
          {
            'shadow-sm border border-gray-200': variant === 'default',
            'shadow-lg border border-gray-200': variant === 'elevated',
            'border-2 border-gray-200': variant === 'outlined',
            'bg-gray-50 border border-gray-200': variant === 'filled',
          },

          className
        )}
        {...props}
      >
        {(title || subtitle || headerAction) && (
          <div
            className={cn(
              'flex items-center justify-between',
              // Padding based on card padding
              {
                'px-3 py-2': padding === 'sm',
                'px-4 py-3': padding === 'md',
                'px-6 py-4': padding === 'lg',
              }
            )}
          >
            <div>
              {title && (
                <h3 className="text-lg font-semibold text-gray-900">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="text-sm text-gray-600 mt-1">
                  {subtitle}
                </p>
              )}
            </div>
            {headerAction && (
              <div className="flex-shrink-0">
                {headerAction}
              </div>
            )}
          </div>
        )}

        <div
          className={cn(
            // Padding styles
            {
              'p-0': padding === 'none',
              'p-3': padding === 'sm',
              'p-4': padding === 'md',
              'p-6': padding === 'lg',
            }
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };