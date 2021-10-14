const http = require('http');

const server = http.createServer((req, res)=>{ //incoming request //respond -what we send back
if(req.url === '/'){
    res.end('welcome to our homepage')
}if(req.url === '/about'){
res.end("ABOUT PAGE")
}
res.end(
    `<h1>OPPS! ERROR</h1>
    <p>page does not exist</p>
    <a href="/">Go back</a>`
)
})

server.listen(5000);