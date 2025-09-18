import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

// Configure DOMPurify for server-side usage
const window = new JSDOM('').window;
const DOMPurifyServer = DOMPurify(window as any);

/**
 * Sanitizes text content to prevent XSS attacks and ensure safe HTML rendering
 * @param text - The text content to sanitize
 * @returns Sanitized text content
 */
export const sanitizeText = (text: string): string => {
  if (!text || typeof text !== 'string') {
    return '';
  }

  // Configure DOMPurify to allow basic formatting but remove dangerous content
  const clean = DOMPurifyServer.sanitize(text, {
    ALLOWED_TAGS: [], // Remove all HTML tags
    ALLOWED_ATTR: [], // Remove all attributes
    ALLOW_DATA_ATTR: false,
  });

  return clean.trim();
};

/**
 * Sanitizes an array of text content
 * @param texts - Array of text content to sanitize
 * @returns Array of sanitized text content
 */
export const sanitizeTextArray = (texts: string[]): string[] => {
  return texts.map(text => sanitizeText(text));
};

/**
 * Validates that sanitized content is safe and properly formatted
 * @param original - Original text
 * @param sanitized - Sanitized text
 * @returns Validation result
 */
export const validateSanitization = (original: string, sanitized: string): boolean => {
  // Check that dangerous patterns are removed
  const dangerousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
  ];

  // Original should not contain dangerous patterns after sanitization
  return !dangerousPatterns.some(pattern => pattern.test(sanitized));
};