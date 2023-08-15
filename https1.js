const http= require("node:http");
const paths= require("node:path");
var fPath= paths.join(__dirname, "tut.html")
const server = http.createServer((req, res)=>{
    req.on("end", ()=>{
        console.log("request received from client")
        console.log(fPath)
    })
    res.writeHead(200, {"content-type":"text/html"})
    // http.get(fPath, (ress)=>{
    //     ress.on("data", (rec)=>{
    //         res.write(rec)
    //     })
    // })
    res.write("hello client there")
    res.end();
})
server.listen(5000, ()=>{
    console.log('server listening on port 5000...')
})