import http from 'http';
import { GetWolfs, GetGoose } from './index.mjs';

const small_doc = { "/certification": "get certifications from firebase", "/projects": "get project from firebase" };

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(small_doc));
    res.end();
  } else if (req.method === 'GET' && req.url === '/certification') {
    const certarr = [];
    const querySnapshot = await GetGoose();
    querySnapshot.forEach((doc) => {
      certarr.push({ ...doc.data() });
    });
    res.statusCode = 200;
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    });
    res.end(JSON.stringify(certarr));
  } else if (req.method === 'GET' && req.url === '/projects') {
    const infoarr = [];
    const querySnapshot = await GetWolfs();
    querySnapshot.forEach((doc) => {
      infoarr.push({ ...doc.data() });
    });
    res.statusCode = 200;
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    });
    res.end(JSON.stringify(infoarr));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found\n');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
