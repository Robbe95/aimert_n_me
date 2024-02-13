/* eslint-disable camelcase */
import { sentryVitePlugin } from '@sentry/vite-plugin'
import vue from '@vitejs/plugin-vue'
import Unfonts from 'unplugin-fonts/vite'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
	define: {
		__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
	},
	plugins: [
		Unfonts({
			// Custom fonts.
			custom: {
				/**
				 * Fonts families lists
				 */
				families: [
					{
						/**
						 * Name of the font family.
						 */
						name: 'geist',
						/**
						 * Local name of the font. Used to add `src: local()` to `@font-rule`.
						 */
						local: 'Geist',
						/**
						 * Regex(es) of font files to import. The names of the files will
						 * predicate the `font-style` and `font-weight` values of the `@font-rule`'s.
						 */
						src: './src/assets/fonts/geist/*.woff2',
					},
				],

				display: 'auto',

				preload: true,

				prefetch: false,

				injectTo: 'head-prepend',
			},
		}),

		viteCompression(),
		VueDevTools(),
		vue({
			script: {
				propsDestructure: true,
				defineModel: true,
			},
		}),
		sentryVitePlugin({
			org: process.env.VITE_SENTRY_ORG,
			project: process.env.VITE_SENTRY_PROJECT,
			authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
			url: process.env.VITE_SENTRY_URL,
		}),
	],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: '/src',
			},
		],
	},
	server: {
		port: 3000,
		hmr: {
			host: 'localhost',
			protocol: 'ws',
			clientPort: 3000,
		},
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true,
				secure: false,
				ws: true,
			},
		},
	},
})
