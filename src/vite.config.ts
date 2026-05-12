import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
// GitHub Actions から `BASE_PATH`（例: `/repo-name/`）を渡すと GitHub Pages のプロジェクトサイト向けビルドになる
export default defineConfig({
	base: process.env.BASE_PATH || '/',
	plugins: [
		preact({
			prerender: {
				enabled: true,
				renderTarget: '#app',
				additionalPrerenderRoutes: ['/404'],
				previewMiddlewareEnabled: true,
				previewMiddlewareFallback: '/404',
			},
		}),
		tailwindcss(),
	],
});
