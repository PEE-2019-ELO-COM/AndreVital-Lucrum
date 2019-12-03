var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'yourusername',
  password : 'yourpassword',
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

////Request que cria uma Empresa
app.post('/create/company', function (req, res) {
  var postData  = req.body;
  connection.query('INSERT INTO `Empresas` SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
//Request que cria um Usuário
app.post('/create/user', function (req, res) {
  var postData  = req.body;
  connection.query('INSERT INTO `Usuarios` SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
//Request que cria a relação de Usuário/Empresa
app.post('/create/relation/usercompany', function (req, res) {
  var postData  = req.body;
  connection.query('INSERT INTO `UsuariosEmpresas` SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
//Request que cria a relação de Usuário/Estabelecimento
app.post('/create/relation/useremporium', function (req, res) {
  var postData  = req.body;
  connection.query('INSERT INTO `UsuariosEstabelecimentos` SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
//Request que cria uma caixa
app.post('/create/cashier', function (req, res) {
  var postData  = req.body;
  connection.query('INSERT INTO `Caixas` SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
//Request que cria um tipo de forma de pagamento
app.post('/create/type', function (req, res) {
  var postData  = req.body;
  connection.query('INSERT INTO `Tipos` SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
//Request que cria um estabelecimento
app.post('/create/emporium', function (req, res) {
  var postData  = req.body;
  connection.query('INSERT INTO `Estabelecimentos` SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
//Request que cria uma transação
app.post('/create/movement', function (req, res) {
  var postData  = req.body;
  connection.query('INSERT INTO `Movimentos` SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
////Request que pega todas as transações de um caixa especifico e retorna a soma delas
app.get('/get/movements/caixa/:id', function (req, res) {
   connection.query('select * from `Movimentos` where `Caixas`=?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    var sum = 0
    for(a in results){
      sum += results[a]['Valor']
    }
    console.log(sum)
    res.end(JSON.stringify(sum));
  });
});
//Request que pega todos as formas de pagamento de um estabelecimento definido
app.get('/get/types/:id', function (req, res) {
   connection.query('select * from `Tipos` where `Estabelecimentos`=?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
//Request que pega todas as caixas de um estabelecimento definido
app.get('/get/cashiers/:id', function (req, res) {
   connection.query('select * from `Caixas` where `Estabelecimentos`=?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});