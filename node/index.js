const http = require('http')
const fs = require('fs');
const path = require('path')




const server= http.createServer((req,res)=>{


    // fs.readFile('log.txt','utf-8',(err,data)=>{
    //     if(err) console.log(err);
    //     console.log(data)
    // })

    // fs.writeFile('log.txt',"hello world from server",(err)=>{
    //     if(err) throw err ;
    //     console.log("success...")

    // } )



    let log = Date() +" "+ req.url+ " "+ req.method +" "+ req.headers.host+" \n" 


// let path = "./data/logadata/log.txt"

// let path1 = "D:/2039 WDR/node/data/logadata/log.txt"

console.log(__dirname)
console.log(__filename)

let path1 = path.join(__dirname,"data","logadata","log.txt")


    if(req.url!="/favicon.ico"){
    fs.appendFile(path1,log,(err)=>{
        if(err) throw err ;

        console.log("success...")

    } )
    }

    if(req.url =='/'){
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




})


server.listen(5000, ()=>console.log("Server Started at 5000 port"))