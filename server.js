var express=require('express');
var bodyparser=require('body-parser');
var app=express();


// middle ware

var logger=function(req,res,next){
    console.log("logging");
    next();
}
app.use(logger);


app.get('/',function(req,res){
    // console.log("inside get");
    res.send("hello world");    
});

app.listen(5000,function(){
    console.log("server started")
})