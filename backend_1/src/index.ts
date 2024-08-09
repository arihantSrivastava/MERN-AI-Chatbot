import express from "express"
import { CLIENT_RENEG_WINDOW } from "tls";

const app = express()



app.use(express.json())
app.post('/hello' , (req,res,next)=>{
     res.send("hello");
    console.log(req.body.name)
})
app.listen(5000,()=> console.log("Server Started"))