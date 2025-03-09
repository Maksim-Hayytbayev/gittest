const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/first.html')
})

app.get('/about', (req,res)=>{
    res.send('sometext about')
})

app.get('/user/:username/:id', (req,res)=>{
    res.send(`User ID: ${req.params.id}. Username ${req.params.username}`)
})

const PORT = 3001;

app.listen(PORT, ()=>{
    console.log(`Server started:  http://${PORT}`);
})



































/*
const my_math = require('./my_math');

let res1 = my_math.plus(5,5);
console.log(res1);

let res2 = my_math.minus(5,5);
console.log(res2);
*/
      //const fs = require('fs');
/*
let res = fs.readFileSync('some.txt','utf-8');
console.log(res);

fs.writeFileSync('some.txt','hi my name is ');
*/

/*
fs.readFile('some.txt','utf-8',(err,data)=>{
    fs.writeFile('some.txt',data + '\nHello',(err,data)=>{
        console.log("OK");
    });
});
*/
/*
fs.mkdir('text-file', ()=>{
    fs.writeFile('./text-file/some.txt', '1234567890', ()=>{});
});
*/
/*
fs.unlink('./text-file/some.txt', ()=>{
    fs.rmdir('./text-file',()=>{})
});
*/

/*
const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res)=>{
   /*
    res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'})
    res.end('Hello Node.js')
    */
     //res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
    //res.end('Hello <b>Node.js</b>')
    /*
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
    const stream = fs.createReadStream('./templates/index.html')
    stream.pipe(res)
    
   res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})

   if(req.url =='/')
       fs.createReadStream('./templates/index.html').pipe(res)
   else if(req.url =='/about')
       fs.createReadStream('./templates/about.html').pipe(res)
   else
    fs.createReadStream('./templates/erorr.html').pipe(res)
})

const PORT = 3001;
const HOST = 'localhost'; //127.0.0.1

server.listen(PORT, HOST, ()=>{
    console.log(`Server started:  http:${PORT}:${HOST}`);
})

*/


