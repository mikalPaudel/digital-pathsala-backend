const express = require("express")
const app = express();

// above 2 line can also be written as:
// const app = require("express")()

// 
app.get('/',(req,res)=>{
    res.send('<h1>hello world!</h1>')
})

// we can write anything in place of req and res but they are the standards
app.get('/about',(hehe,haha)=>{
    haha.send('about world!')
})


// port allocation
app.listen(3000,function(){
    console.log("Server has at port 3000")
})