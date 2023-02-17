import express from 'express';
import http  from 'http'
import {Server} from 'socket.io'

const app=express();
const port=4000; 
const httpServer=http.createServer(app)
const io=new Server(httpServer)


import path from 'path'
import {fileURLToPath} from 'url'

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})



io.on('connection',(socket)=>{
    console.log("connection is Ready")
})

httpServer.listen(port,()=>{
    console.log('Server is running ');
})