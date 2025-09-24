import express from 'express'
const route = express.Router()


route.get('/bible',async(req,res)=>{
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


export default route;