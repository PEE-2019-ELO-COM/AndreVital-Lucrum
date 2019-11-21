var mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});
//Se conecta ao seu mysql e cria um banco de dados chamado lucrum
con.connect(function(err) {
  if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE lucrum;", function (err, result) {
    if (err) throw err;
    console.log("Database created");
    let a = ['']
   //  for
    // con.query("")
  });
});