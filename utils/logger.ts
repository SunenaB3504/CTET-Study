/**
 * Centralized logging utility for the CTET Study App
 * Provides consistent logging with development/production modes
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LoggerConfig {
  isDevelopment: boolean;
  enableDebug: boolean;
  enableInfo: boolean;
}

class Logger {
  private config: LoggerConfig;

  constructor() {
    this.config = {
      isDevelopment: process.env.NODE_ENV === 'development',
      enableDebug: process.env.NODE_ENV === 'development',
      enableInfo: true,
    };
  }

  /**
   * Format log message with timestamp and level
   */
  private formatMessage(level: LogLevel, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  }

  /**
   * Internal logging method
   */
  private log(level: LogLevel, message: string, ...args: unknown[]): void {
    // Skip debug logs in production
    if (level === 'debug' && !this.config.enableDebug) {
      return;
    }

    // Skip info logs if disabled
    if (level === 'info' && !this.config.enableInfo) {
      return;
    }

    const formattedMessage = this.formatMessage(level, message);

    switch (level) {
      case 'error':
        console.error(formattedMessage, ...args);
        break;
      case 'warn':
        console.warn(formattedMessage, ...args);
        break;
      case 'info':
      case 'debug':
        if (this.config.isDevelopment) {
          console.log(formattedMessage, ...args);
        }
        break;
    }
  }

  /**
   * Log debug messages (development only)
   */
  debug(message: string, ...args: unknown[]): void {
    this.log('debug', message, ...args);
  }

  /**
   * Log informational messages
   */
  info(message: string, ...args: unknown[]): void {
    this.log('info', message, ...args);
  }

  /**
   * Log warning messages
   */
  warn(message: string, ...args: unknown[]): void {
    this.log('warn', message, ...args);
  }

  /**
   * Log error messages
   */
  error(message: string, ...args: unknown[]): void {
    this.log('error', message, ...args);
  }

  /**
   * Log performance metrics (development only)
   */
  performance(metric: string, value: number, unit: string = 'ms'): void {
    if (this.config.isDevelopment) {
      this.debug(`Performance: ${metric} = ${value.toFixed(2)}${unit}`);
    }
  }

  /**
   * Group related logs (development only)
   */
  group(label: string, collapsed: boolean = false): void {
    if (this.config.isDevelopment) {
      if (collapsed) {
        console.groupCollapsed(this.formatMessage('info', label));
      } else {
        console.group(this.formatMessage('info', label));
      }
    }
  }

  /**
   * End log group
   */
  groupEnd(): void {
    if (this.config.isDevelopment) {
      console.groupEnd();
    }
  }
}

// Export singleton instance
export const logger = new Logger();

// Export types for external use
export type { LogLevel };
