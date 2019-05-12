const path =require("path");
const express=require("express");
const http=require("http");
const socketIO=require("socket.io");
const PORT=process.env.PORT || 3000;
const publicPath=path.join(__dirname,"..","/public");
const app= express();
const {generateMessage}=require('./utils/message')
let server=http.createServer(app);
let io=socketIO(server);

app.use(express.static(publicPath));
io.on('connection',(socket)=>{
console.log("new user connected");


    socket.emit('newMessage',{
        from:"Admin",
        text:"welcome to the chatapp",
        createdAt:new Date()
    })
    socket.broadcast.emit('newMessage',{
        from:"Admin",
        text:"new user connected",
        createdAt:new Date()
    })

socket.on('disconnect',()=>{
    console.log("disconnected from the client");
})
socket.on("createMessage",(createmsg,callback)=>{
    console.log("you have to create the msg",createmsg);
    io.emit('newMessage',{
        from:createmsg.from,
        text:createmsg.text,
        createdAt:new Date()
    });
    callback('this is from the server');
    console.log("message created and send");
})
});

server.listen(PORT,()=>{
    console.log(`Application is started on port ${PORT}`);
})