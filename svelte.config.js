import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md', '.css', '.html', '.js', '.ts'], // add .css and .html to the extensions array
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  extensions: [".svelte"],
  kit: {
    adapter: adapter({
      fallback: '404.html',
      pages: "public",
      precompress: true,
      trailingSlash:'always',
      assets: "public",
      strict: true,
    }),
    //adapter: adapter(),
  },
};

export default config;
