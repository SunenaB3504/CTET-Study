#!/usr/bin/env node

/**
 * Context Validation Script
 * Ensures new code follows established patterns and maintains project consistency
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ContextValidator {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.patterns = this.loadPatterns();
  }

  loadPatterns() {
    return {
      componentStructure: {
        required: [
          'React.forwardRef',
          'TypeScript interface',
          'cn() utility',
          'displayName'
        ],
        file: 'src/components/ui/Button.tsx'
      },
      importPatterns: {
        required: ['@/src/lib/utils', 'React'],
        file: 'src/components/ui/Button.tsx'
      },
      testingPatterns: {
        required: ['describe(', 'it(', 'expect('],
        file: 'src/components/ui/Button.test.tsx'
      }
    };
  }

  validateFile(filePath) {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const issues = [];

    console.log(`🔍 Validating: ${path.relative(this.projectRoot, filePath)}`);

    // Check for context anchors
    if (!content.includes('CONTEXT_ANCHOR:')) {
      issues.push('Missing CONTEXT_ANCHOR comment');
    }

    // Check for JSDoc documentation
    if (!content.includes('@fileoverview')) {
      issues.push('Missing @fileoverview JSDoc comment');
    }

    // Check for established patterns
    if (filePath.includes('components/ui') && filePath.endsWith('.tsx')) {
      if (!content.includes('React.forwardRef')) {
        issues.push('Missing React.forwardRef pattern');
      }
      if (!content.includes('cn(')) {
        issues.push('Missing cn() utility usage');
      }
    }

    if (issues.length > 0) {
      console.log(`❌ Issues found:`);
      issues.forEach(issue => console.log(`   - ${issue}`));
      return false;
    }

    console.log(`✅ Validation passed`);
    return true;
  }

  validateProject() {
    console.log('🚀 Starting Context Validation...\n');

    const filesToCheck = [
      'src/components/ui/Button.tsx',
      'src/components/ui/Input.tsx',
      'src/components/ui/Card.tsx',
      'src/components/ui/Modal.tsx'
    ];

    let allValid = true;

    filesToCheck.forEach(filePath => {
      const fullPath = path.join(this.projectRoot, filePath);
      if (!this.validateFile(fullPath)) {
        allValid = false;
      }
      console.log('');
    });

    if (allValid) {
      console.log('🎉 All context validations passed!');
    } else {
      console.log('⚠️  Some validations failed. Please review and fix.');
      process.exit(1);
    }
  }

  generateContextReport() {
    const report = {
      timestamp: new Date().toISOString(),
      patterns: this.patterns,
      recommendations: [
        'Add CONTEXT_ANCHOR comments to new components',
        'Include @fileoverview JSDoc in all files',
        'Follow established React.forwardRef pattern',
        'Use cn() utility for className merging',
        'Include comprehensive TypeScript interfaces'
      ]
    };

    const reportPath = path.join(this.projectRoot, 'docs', 'CONTEXT_REPORT.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Context report generated: ${reportPath}`);
  }
}

// CLI Interface
const args = process.argv.slice(2);
const validator = new ContextValidator();

if (args.includes('--report')) {
  validator.generateContextReport();
} else {
  validator.validateProject();
}

export default ContextValidator;