const path =require("path");
const express=require("express");
const http=require("http");
const socketIO=require("socket.io");
const PORT=process.env.PORT || 3000;
const publicPath=path.join(__dirname,"..","/public");
const app= express();
let server=http.createServer(app);
let io=socketIO(server);

app.use(express.static(publicPath));
io.on('connection',(socket)=>{
console.log("new user connected");
socket.emit('newMessage',{
    to:"shauna morkel",
    text:"hello shauna where to meet",
    createdAt:new Date()
});
socket.on('disconnect',()=>{
    console.log("disconnected from the client");
})
socket.on("createMessage",(createmsg)=>{
    console.log("you have to create the msg",createmsg);
})
});

server.listen(PORT,()=>{
    console.log(`Application is started on port ${PORT}`);
})