var socket =io();
socket.on('connect',function (){
    console.log("connected to the browser");
    socket.emit("createMessage",{
        to:"jen shaw",
        text:"hello jen how are you"
    })
});

socket.on('disconnect',function(){
    console.log("disconnected from server");
});

socket.on("newMessage",function(newmsg){
    console.log("message from the server is",newmsg);
});