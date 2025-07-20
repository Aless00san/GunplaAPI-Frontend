import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'http://https://main.dfnl6fna5gler.amplifyapp.com:5174',
});
