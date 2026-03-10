import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.zahnmedizin-stadtpark.at',
  integrations: [
    tailwind({
      applyBaseStyles: false, // Wir verwalten Base-Styles selbst in global.css
    }),
    sitemap({
      filter: (page) =>
        !page.includes('/datenschutz') &&
        !page.includes('/impressum') &&
        !page.includes('/danke'),
    }),
  ],
});
