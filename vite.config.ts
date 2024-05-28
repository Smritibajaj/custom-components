import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// import { EsLinter, linterPlugin } from 'vite-plugin-linter';
// import tsConfigPaths from 'vite-tsconfig-paths';
import * as packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig(config => ({
	plugins: [
		// tsConfigPaths(),
		// linterPlugin({
		// 	include: ['./src/**/*.{js,jsx,ts,tsx}'],
		// 	linters: [new EsLinter({ configEnv: config })],
		// }),
		dts({
			insertTypesEntry: true,
			// include: ['src/components/'],
		}),
		react(),
	],
	build: {
		sourcemap: true,
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'binary-components',
			formats: ['es', 'cjs'],
			fileName: format => `index.${format}.js`,
		},
		rollupOptions: {
			external: [...Object.keys(packageJson.peerDependencies)],
		},
		watch: config.mode === 'watch' ? {} : undefined,
	},
}));
