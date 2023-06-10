import express from 'express';
import http  from 'http'
import { Server } from 'socket.io'

const app=express();
const port=4000; 
const httpServer=http.createServer(app)
const io=new Server(httpServer,{
    cors:{
        origin:["http://localhost:3000"],
    },
})


import path from 'path'
import {fileURLToPath} from 'url'

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)


app.get('/',(req,res)=>{
    console.log(__filename)
    res.sendFile(__dirname + '/index.html');
})



io.on('connection',(socket)=>{

    console.log("connection is Ready")
    socket.on('send-message',(msg)=>{
        console.log("message received"+msg )
        socket.broadcast.emit('message-from-server',{msg})
    })
})

io.on('disconnect',(sockboet)=>{

    console.log("user left")
     
})




httpServer.listen(port,()=>{
    console.log('Server is running ');
})