import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import path from 'path';
import * as dotenv from 'dotenv';
dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					$lib: path.resolve('./src/lib'),
					$data: path.resolve('./src/data')
				}
			},
			ssr: {
				noExternal: [
					'@fortawesome/*',
					'@fortawesome/fontawesome-pro',
					'@fortawesome/fontawesome-svg-core',
					'@fortawesome/pro-duotone-svg-icons',
					'@fortawesome/pro-light-svg-icons',
					'@fortawesome/pro-regular-svg-icons',
					'@fortawesome/pro-solid-svg-icons',
					'@fortawesome/free-brands-svg-icons'
				]
			}
		},
		prerender: {
			crawl: true,
			enabled: true
		}
	}
};

export default config;
