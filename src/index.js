const express = require("express");
const app = express();
const path = require("path");

//importação de rotas
const usuarioRoute = require('./routes/usuarioRoute.js');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.set("views", "./src/views");


app.use(express.static(path.join(__dirname,'public')));

app.use('/admin/usuario', usuarioRoute);





app.listen(3000, function (req,res){
console.log("Servidor funcionando na porta 3000");
});