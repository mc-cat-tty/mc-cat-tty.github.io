import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy'; 

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        viteStaticCopy({
          targets: [
            {
              src: 'public',
              dest: ''
            }
          ]
        })
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          llvm_backend_assignments: path.resolve(__dirname, 'blog/llvm_backend_assignments.html'),
          ad_assignments: path.resolve(__dirname, 'blog/ad_assignments.html'),
          'revolut-breakeven': path.resolve(__dirname, 'tools/revolut-breakeven/index.html'),
          // template: path.resolve(__dirname, 'blog/template.html'),
        },
      },
    },
    };
});
