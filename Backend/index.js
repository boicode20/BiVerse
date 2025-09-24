import express from 'express'
import cors from 'cors'
import path from 'path'
import 'dotenv/config'
import route from './Router/Route.js';
const port = 5050;

const server = express()
const __dirname = path.resolve()


if(process.env.NODE_ENV !== "production"){
  
    server.use(cors(
        {
            origin:'http://localhost:5173'
        }
    ))
}

server.use(express.json())


server.listen(port,()=>{
    console.log(`SERVER IS RUNNING ON PORT: ${port}`)
})




if(process.env.NODE_ENV ==="production"){
    server.use(express.static(path.join(__dirname,"../Frontend/dist")))
    server.get("/*splat",(req,res)=>{
    res.sendFile(path.join(__dirname,"../Frontend","dist","index.html"))
})

}

server.use('/api',route)