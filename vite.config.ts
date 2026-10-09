import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			// Consult https://github.com/sveltejs/svelte-preprocess
			// for more information about preprocessors
			adapter: adapter(),
			alias: { 'svelte-relative-time': './src/lib' }
		})
	]
});
