var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');
var app=express();


// middle ware

// var logger=function(req,res,next){
//     console.log("logging");
//     next();
// }
// app.use(logger);


//view engine ejs

app.set('view engine','ejs');
app.set('views'),path.join(__dirname,'views');




// bodyparser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//static path
// app.use(express.static(path.join(__dirname,'public')));

// var person={
//     'name':'harsha',
//     'id':123
// }

app.get('/',function(req,res){
    // console.log("inside get");
    res.render('index');    
});

app.listen(5000,function(){
    console.log("server started")
})