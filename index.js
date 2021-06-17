const fs=require("fs");
const http=require("http");

const server = http.createServer((req,res)=>{
    
    fs.readFile("myapi.json","utf-8",(err,data)=>{
        res.end(data);
    })
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port 8000");
});