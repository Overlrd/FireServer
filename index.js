import { GetWolfs, GetGoose } from './index.mjs';

import http from 'http'


let Infoarr = [] 
const QuerySnapshot = await GetWolfs();
QuerySnapshot.forEach((doc) => {
    Infoarr.push({...doc.data()})
    
})

let certarr = [] 
const QuerySnapshot_again = await GetGoose();
QuerySnapshot_again.forEach((doc) => {
    certarr.push({...doc.data()})
    
})




const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/certification') {
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify(certarr));
    res.end();
  }
  else if (req.method === 'GET' && req.url === '/projects'){
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify(Infoarr));
    res.end();
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found\n');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
