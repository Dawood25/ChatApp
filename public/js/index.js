var socket =io();


socket.on('disconnect',function(){
    console.log("disconnected from server");
});

socket.on("newMessage",function(newmsg){
    let li =jQuery('<li></li>')
    li.text(`from ${newmsg.from} text ${newmsg.text}`)
    console.log("mes from the server is",newmsg);
    jQuery("#messages").append(li);
});

socket.emit("createMessage",{
    from:"Jen",
    text:"Demo to run acknowledgement"
},function(data){
    console.log("retrieve the data")
});

jQuery('#message-form').on('submit',function(e){
//to prevent default behaviour of our form in jQuery
e.preventDefault();
socket.emit('createMessage',{
    from:"User",
    text:jQuery('[name=message]').val()
},function(){
    jQuery('[name=message]').val('');
})
});