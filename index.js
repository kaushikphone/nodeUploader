const express =require('express');
const app=express()
const port =3000
const cookieParser=require('cookie-parser');
const logger=require('morgan');
const indexRouter=require('./routes/index');
const usersRouter=require('./routes/users');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.use('/',indexRouter);
app.use('/users',usersRouter);
module.exports=app;
/*app.get('/',(req,res)=>{
    res.send("Hello World")
});*/
app.listen(port,()=>{
    console.log("application is started here");
});