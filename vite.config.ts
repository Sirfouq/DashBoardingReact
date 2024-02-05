import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// import fs from 'fs';
// import { defineConfig } from 'vite';

// export default defineConfig({
//   server: {
//     https: {
//       key: fs.readFileSync('./certs/cert.key', 'utf-8'),
//       cert: fs.readFileSync('./certs/cert.crt', 'utf-8'),
//     }
//   },
// });
