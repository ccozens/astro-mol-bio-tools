/// <reference types="vitest" />
// import { getViteConfig } from 'astro/config';
import { defineConfig } from 'vitest/config';

// export default getViteConfig({

export default defineConfig({
	test: {
		/* for example, use global to avoid globals imports (describe, test, expect): */
		globals: true,
		watch: true,
		coverage: {
			// include all files (meaning: including those without any tests written yet) in coverage calcs
			all: true,
			// exclude config files and tests from coverage calcs
			exclude: [ 
				"*.config.ts", 
				"*/*.d.ts",
				"test/**"
			]
		}
	},
});

