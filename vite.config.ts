import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from "path";
const config: UserConfig = {
	mode: "development",
	plugins: [sveltekit()],
	server: {
		port: 3000,
		fs: {
			strict: false,
		}
	},
	ssr: {
		noExternal: ["svelte-hero-icons"],
	},
	preview: {
		port: 3000,
	},

	resolve: {
		alias: {
			'/@': __dirname,
			'@': __dirname,
			$src: path.resolve("src"),
			$api: path.resolve("src/api"),
			$static: path.resolve("static"),
			$components: path.resolve("src/components"),
			$libs: path.resolve("src/libs"),
			$routes: path.resolve("src/routes"),
			$widget: path.resolve("src/components/widgets"),
			$gen: path.resolve("/src/gen"),
			$stores: path.resolve("src/stores"),
			$types: path.resolve("src/libs/types"),
			$utils: path.resolve("src/libs/utils")
		},
	},
};

export default config;
