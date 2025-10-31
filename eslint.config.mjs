// eslint.config.mjs
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create FlatCompat instance with the base directory for resolving configs
const compat = new FlatCompat({ baseDirectory: __dirname });

// Export the ESLint config array with Next.js recommended configs
export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier')
];
