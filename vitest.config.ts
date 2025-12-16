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
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        '.astro/',
        'testing/testing-astro/e2e/**',
        'testing/testing-docker/e2e/**',
        '**/*.config.{js,ts,mjs,cjs}',
        '**/nightwatch.conf.cjs',
      ],
    },
  },
});
