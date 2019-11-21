var mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "andre",
  password: "smaragd25"
});

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