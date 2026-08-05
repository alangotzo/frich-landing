// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
site: 'https://alangotzo.github.io',
base: '/frich-landing',
build: {
    assetsPrefix: '/frich-landing',  
  },
});
