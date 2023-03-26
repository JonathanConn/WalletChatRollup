/* eslint-disable import/no-anonymous-default-export */
// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

import postcss from "rollup-plugin-postcss";
import visualizer from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';
import { getFiles } from './scripts/buildUtils';


const extensions = ['.js', '.ts', '.jsx', '.tsx'];

export default {
  input: [
    './src/index.ts',
    ...getFiles('./src/components', extensions),
    ...getFiles('./src/config', extensions),
    ...getFiles('./src/core', extensions),
    ...getFiles('./src/data', extensions),
    ...getFiles('./src/hooks', extensions),
    ...getFiles('./src/lib', extensions),
    ...getFiles('./src/store', extensions),
    ...getFiles('./src/utils', extensions),
    ...getFiles('./src/views', extensions),
  ],

  output: {
    dir: 'dist',
    format: 'cjs',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    postcss(),
    terser(),
    visualizer({
      filename: 'bundle-analysis.html',
      open: true,
    }),
  ],
  external: ['react', 'react-dom'],
};
