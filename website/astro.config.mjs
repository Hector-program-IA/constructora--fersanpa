// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
// Static site — no adapter needed for Cloudflare Pages static hosting
export default defineConfig({
  adapter: cloudflare()
});