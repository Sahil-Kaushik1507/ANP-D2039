const http = require('http')
const express = require('express')

const app = express();

app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.sendFile("D:/2039 WDR/node/Public/home.html")
})

app.get('/about',(req,res)=>{
    res.sendFile('D:/2039 WDR/node/Public/about.html')
})

app.get("/contact",(req,res)=>{
    res.sendFile("D:/2039 WDR/node/Public/contact.html")
})


app.post("/contact",(req,res)=>{
    console.log(req.body)
    res.sendFile("D:/2039 WDR/node/Public/home.html")
})

const server= http.createServer(app)



 function myhandler(req,res){

    if(req.url =='/' && req.method=="GET"){
        res.end("Home Page")
    }else if (req.url=='/about'){
        res.end("About page")
    }else if (req.url=='/contact'){
        res.end("Contact page")
    }else if (req.url=='/cart'){
        res.end("Cart page")
    }else{
        res.end("404 Page not found")
    }

}

server.listen(5000, ()=>console.log("Server Started at 5000 port"))