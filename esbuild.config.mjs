import { buildSync } from 'esbuild';
import packageJson from './package.json' assert { type: 'json' };

const shared = {
  bundle: true,
  entryPoints: ['src/index.ts'],
  // Treat all dependencies in package.json as externals to keep bundle size to a minimum
  external: Object.keys(packageJson.dependencies),
  logLevel: 'info',
  minify: true,
  sourcemap: true,
  target: ['ESNext'],
};

buildSync({
  ...shared,
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
});

buildSync({
  ...shared,
  entryPoints: ['src/index.ts'],
  format: 'cjs',
  outfile: 'dist/index.cjs.js',
});

buildSync({
  ...shared,
  entryPoints: ['src/index.ts'],
  format: 'esm',
  outfile: 'dist/index.esm.js',
});
