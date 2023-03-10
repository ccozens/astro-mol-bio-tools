/// <reference types="vitest" />
// import { getViteConfig } from 'astro/config';
import { configDefaults, defineConfig } from 'vitest/config';

// export default getViteConfig({

export default defineConfig({
  test: {
    setupFiles: './test/setup.ts',
    /* for example, use global to avoid globals imports (describe, test, expect): */
    globals: true,
    environment: 'jsdom',
    watch: true,
    mockReset: true,
    exclude: [
      ...configDefaults.exclude,
      // exclude function unit tests - they are tested in integration tests
      'test/functions/**',
    ],
    coverage: {
      // include all files (meaning: including those without any tests written yet) in coverage calcs
      all: true,
      // exclude config files and tests from coverage calcs
      exclude: ['*.config.ts', '*/*.d.ts', 'test/**'],
    },
  },
});
