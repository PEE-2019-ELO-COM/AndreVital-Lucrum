// import express from 'express';

var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'yourusername',
  password : 'yourrpassword',
  database : 'lucrum'
});


connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
  
var server = app.listen(3000, "127.0.0.1", function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Example app listening at http://%s:%s", host, port)
 
});

//Creates a company
app.post('/create/company', function (req, res) {
  // console.log(req)
  var postData  = req.body;
  console.log(postData)
  connection.query('INSERT INTO `Empresas` SET ?', postData, function (error, results, fields) {
    // console.log(JSON.stringify(results))
    // console.log(res)
    // console.log(results)
    console.log(results.body)
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
//ok
app.post('/create/user', function (req, res) {
  // console.log(req)
  var postData  = req.body;
  connection.query('INSERT INTO `Usuarios` SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
//ok
app.post('/create/relation/usercompany', function (req, res) {
  // console.log(req.body)
  var postData  = req.body;
  connection.query('INSERT INTO `UsuariosEmpresas` SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    // console.log
    res.end(JSON.stringify(results));
  });
});

app.post('/create/relation/useremporium', function (req, res) {
  // console.log(req.body)
  var postData  = req.body;
  connection.query('INSERT INTO `UsuariosEstabelecimentos` SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    // console.log
    res.end(JSON.stringify(results));
  });
});
//ok
app.post('/create/cashier', function (req, res) {
  console.log(req)
  var postData  = req.body;
  connection.query('INSERT INTO `Caixas` SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
  
//rest api to get a single employee data
app.get('/employees/:id', function (req, res) {
   connection.query('select * from employee where id=?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
//ok
app.post('/create/type', function (req, res) {
  console.log(req)
  var postData  = req.body;
  connection.query('INSERT INTO `Tipos` SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
//ok
app.post('/create/emporium', function (req, res) {
  console.log(req)
  var postData  = req.body;
  connection.query('INSERT INTO `Estabelecimentos` SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

app.post('/create/movement', function (req, res) {
  // console.log(req)
  var postData  = req.body;
  connection.query('INSERT INTO `Movimentos` SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
//ok
app.get('/get/movements/caixa/:id', function (req, res) {
   connection.query('select * from `Movimentos` where `Caixas`=?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    var sum = 0
    for(a in results){
      sum += results[a]['Valor']
      // console.log(results[a]['Valor'])
    }
    console.log(sum)
    res.end(JSON.stringify(sum));
  });
});
//ok
app.get('/get/types/:id', function (req, res) {
   connection.query('select * from `Tipos` where `Estabelecimentos`=?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    console.log(JSON.stringify(results))
    res.end(JSON.stringify(results));
  });
});
//ok
app.get('/get/cashiers/:id', function (req, res) {
   connection.query('select * from `Caixas` where `Estabelecimentos`=?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});