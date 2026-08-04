import { chromium } from 'playwright';
import { preview } from 'vite';
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');

// Keep this in sync with the <Route path="..."> list in src/main.jsx
const mainJsx = readFileSync(join(root, 'src/main.jsx'), 'utf-8');
const routes = [...mainJsx.matchAll(/<Route\s+path="([^"]+)"/g)].map((m) => m[1]);

if (routes.length === 0) {
  throw new Error('No routes found in src/main.jsx — prerender aborted.');
}

const server = await preview({ root, preview: { port: 4173, strictPort: true } });
const baseUrl = `http://localhost:4173`;

const browser = await chromium.launch();
const page = await browser.newPage();

// Capture every route into memory first. The dev/preview server serves dist/index.html
// as the SPA fallback for every route it doesn't have a static file for yet — writing
// results to disk mid-loop would let an earlier route's prerendered output (e.g. "/")
// leak into the fallback shell used by every route captured after it.
const results = [];
for (const route of routes) {
  await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' });
  // Let React mount and Helmet flush head tags.
  await page.waitForSelector('#root *', { timeout: 10000 }).catch(() => {});
  const html = await page.content();
  results.push([route, html]);
}

await browser.close();
await server.httpServer.close();

for (const [route, html] of results) {
  const outPath = route === '/' ? join(distDir, 'index.html') : join(distDir, route.replace(/^\//, ''), 'index.html');
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  console.log(`prerendered ${route} -> ${outPath.replace(root, '.')}`);
}
