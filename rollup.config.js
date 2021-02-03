import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
export default {
  input: './src/index.ts',
  output: {
    file: './lib/index.ts',
    format: 'es'
  },
  plugins: [
    // nodeResolve({ preferBuiltins: false }),
    // commonjs(),
    peerDepsExternal(),
    typescript(),
    terser(),
  ]
}