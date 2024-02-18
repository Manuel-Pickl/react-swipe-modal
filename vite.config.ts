import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sassPlugin from 'vite-plugin-sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sassPlugin(),],
  build: {
    lib: {
      entry: 'src/components/SwipeModal/SwipeModal.tsx',
      name: 'SwipeModal',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        assetFileNames: 'style.css',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
