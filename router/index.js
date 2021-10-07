const express = require('express');

const Router = express.Router();

Router.get('/',(req,res)=>{
    res.render('index',{
        tittle : "home",
        layout : "./layouts/main-layout"
    })
})

Router.get('/form-login',(req,res)=>{
    res.render('login',{
        tittle: 'FORM-LOGIN',
        layout : './layouts/main-layout'
    })
})

Router.get('/form-register',(req,res)=>{
    res.render('register',{
        tittle: 'FORM-REGISTER',
        layout : './layouts/main-layout'
    })
})
module.exports = Router;