const express = require ('express');
const app = express();
const path = require ('path');

const port = 3030

const http = '/';
const home = '/home'
const register = '/register';
const login = '/login'
const httpHome = path.join(__dirname,'views/home.html');
const httpRegister = path.join(__dirname,'views/register.html');
const httpLogin = path.join(__dirname,'views/login.html');



app.use(express.static(path.join(__dirname,'/public/')))

app.listen(port, () => {
    console.log(`LocalHost:${port} is running`)
});

app.get(http, (req,res) => {
    res.sendFile(httpHome)
})

app.get(home, (req,res) => {
    res.sendFile(httpHome)
})

app.get(register, (req,res) => {
    res.sendFile(httpRegister)
})

app.post(login, (req,res) => {
    res.sendFile(httpLogin)
})

