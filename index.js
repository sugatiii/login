const express = require('express');
const expressLayout = require('express-ejs-layouts')
const login = require('./router/index.js')
const auth = require('./router/auth.js')
const db = require('./config/database.js')


const app = express();
app.use(express.urlencoded())
app.use(express.json());
app.use(express.static('public'));

app.set('view engine','ejs');
app.use(expressLayout);

app.use('/',login);
app.use('/form-login',login);
app.use('/form-register',login);
app.use('/auth',auth)

app.listen(5001,()=>{
    console.log('port connected on 5001')
})