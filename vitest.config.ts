import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: [
      'src/**/*.{test,spec}.{js,ts,jsx,tsx}',
      'testing/testing-astro/unit/**/*.{test,spec}.{js,ts,jsx,tsx}',
      'testing/testing-docker/unit/**/*.{test,spec}.{js,ts,jsx,tsx}',
    ],
    exclude: [
      'node_modules',
      'dist',
      '.astro',
      'testing/testing-astro/e2e/**',
      'testing/testing-docker/e2e/**',
    ],
    setupFiles: ['./vitest.setup.ts'],
    pool: 'forks',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
      exclude: [
        'node_modules/',
        'dist/',
        '.astro/',
        'testing/testing-astro/e2e/**',
        'testing/testing-docker/e2e/**',
        '**/*.config.{js,ts,mjs,cjs}',
        '**/nightwatch.conf.cjs',
        '**/*.css',
        '**/*.scss',
      ],
    },
  },
  server: {
    watch: {
      ignored: ['**/node_modules/**', '**/dist/**', '**/.astro/**'],
      usePolling: true,
      interval: 1000,
    },
  },
});
