var express=require('express');
var bodyparser=require('body-parser');
var app=express();

app.get('/',function(req,res){
    // console.log("inside get");
    res.send("hello world");    
});

app.listen(5000,function(){
    console.log("server started")
})