import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify()
});
