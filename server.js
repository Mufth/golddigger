import http from 'node:http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { serveStatic } from './utils/serveStatic.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = 8001;



const server = http.createServer(async (req, res) => {
  await serveStatic(req, res, __dirname);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});