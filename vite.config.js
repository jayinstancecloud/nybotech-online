import { defineConfig } from 'vite';

// Configure Vite to build a multi-page static site so Vercel includes
// all HTML pages in the output instead of only index.html
export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        products: 'products.html',
        about: 'about.html',
        contact: 'contact.html',
        cart: 'cart.html'
      }
    }
  }
});


