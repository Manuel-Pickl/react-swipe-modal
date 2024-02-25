import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const buildPackage = process.env.npm_lifecycle_event === 'build:package';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: !buildPackage ? {} : {
    lib: {
      entry: 'src/components/SwipeModal/SwipeModal.tsx',
      name: 'SwipeModal',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
