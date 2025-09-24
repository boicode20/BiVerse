import express from 'express'
import cors from 'cors'
import path from 'path'
import 'dotenv/config'
const port = 5050;
const api_url = 'https://biblebytopic.com/api/getrandompopularverse-kjv'

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


server.get('/bible',async(req,res)=>{
    try{
        const data = await fetch(api_url)
        const response = await data.json()
        if(!response) return res.status(401).json({error:true,message:"Unauthorize user"})
        
        return res.status(200).json({error:false,message:"Success",data:response})
    }catch(err){
        console.error(err)
        return res.status(400).json(err)
    }
})

if(process.env.NODE_ENV ==="production"){
    server.use(express.static(path.join(__dirname,"../frontend/dist")))
    server.get("/*splat",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
})

}