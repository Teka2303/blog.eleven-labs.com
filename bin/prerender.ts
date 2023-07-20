import { resolve } from 'node:path';
import { createServer as createViteServer } from 'vite';

const prerender = async (): Promise<void> => {
  const baseUrl = process.env.BASE_URL || '/';
  const vite = await createViteServer({
    server: { middlewareMode: true },
    base: baseUrl,
    appType: 'custom',
    mode: 'prerender',
  });

  try {
    const { generateFiles } = await vite.ssrLoadModule('/src/helpers/prerenderHelper');
    generateFiles({
      rootDir: resolve(process.cwd(), 'dist'),
      baseUrl,
    });
  } catch (e) {
    console.error(e);
  } finally {
    vite.close();
  }
};

prerender();
