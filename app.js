const express = require("express")
const app = express();

// above 2 line can also be written as:
// const app = require("express")()

// 
app.get('/',(req,res)=>{
    // res.send('<h1>hello world!</h1>')
    res.json({
        name:"mikal"
    })
})

// we can write anything in place of req and res but they are the standards
app.get('/about',(hehe,haha)=>{
    haha.send('about world!')
})


app.get('/books',(req,res)=>{
    res.json({
        message:"book fetched successfully"
    })
})

app.post('/books',(req,res)=>{
    res.json({
        message:"book added successfully"
    })
})

app.delete('/books/:id',(req,res)=>{
    res.json({
        message:"book deleted successfully"
    })
})

app.patch('/books/:id',(req,res)=>{
    res.json({
        message:"book updated successfully"
    })
})

app.put('/books',(req,res)=>{
    res.json({
        message:"book updated successfully"
    })
})

// port allocation
app.listen(3000,function(){
    console.log("Server has at port 3000")
})