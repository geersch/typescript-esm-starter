import { defineConfig, mergeConfig } from 'vitest/config';
import { sharedVitestConfig } from '../vitest.shared.js';

export default defineConfig(() =>
  mergeConfig(
    sharedVitestConfig(),
    defineConfig({
      test: {
        include: ['**/*.e2e-spec.ts'],
      },
    }),
  ),
);
