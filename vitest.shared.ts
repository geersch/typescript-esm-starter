import tsconfigPaths from 'vite-tsconfig-paths';
import { UserConfig } from 'vitest/config';

export const sharedVitestConfig = (): UserConfig => {
  // Debugging via the Vitest VS Code plugin?
  const vitestServeApi = process.argv.find((arg) => arg === '--api.port');
  const timeout = vitestServeApi ? 600_000 : 5000;

  return {
    test: {
      globals: true,
      root: '.',
      sequence: {
        hooks: 'stack',
      },
      reporters: 'basic',
      coverage: {
        include: ['src'],
        reporter: ['text', 'json', 'html'],
      },
      isolate: false,
      poolOptions: {
        threads: {
          useAtomics: true,
        },
      },
      testTimeout: timeout,
      hookTimeout: timeout,
    },
    plugins: [
      tsconfigPaths({
        root: '.',
        projects: ['tsconfig.json'],
      }),
    ],
  };
};
