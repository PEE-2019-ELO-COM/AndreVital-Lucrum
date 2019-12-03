var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "lucrum"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Cria a tabela Empresas
  var sql = "CREATE TABLE Empresas (idEmpresas int NOT NULL AUTO_INCREMENT, Name VARCHAR(45), CNPJ INT, Enabled BOOLEAN, PRIMARY KEY (idEmpresas))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  })
  //Cria a tablea usuarios
  var sql1 = "CREATE TABLE Usuarios (idUsuarios int NOT NULL AUTO_INCREMENT, PRIMARY KEY(idUsuarios), Nome VARCHAR(45), CPF int, Enabled BOOLEAN, Email VARCHAR(45), Senha VARCHAR(25))";
  con.query(sql1, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  })
  //Cria a tabela UsuariosEmpresas
  var sql2 = "CREATE TABLE UsuariosEmpresas (idUsuariosEmpresas int NOT NULL AUTO_INCREMENT, PRIMARY KEY (idUsuariosEmpresas), Usuarios int NOT NULL, FOREIGN KEY (Usuarios) REFERENCES Usuarios(idUsuarios), Empresas int NOT NULL, FOREIGN KEY (Empresas) REFERENCES Empresas(idEmpresas))";
  con.query(sql2, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  })
  //Cria a tabela Estabelecimentos
  var sql3 = "CREATE TABLE Estabelecimentos (idEstabelecimentos int NOT NULL AUTO_INCREMENT, PRIMARY KEY (idEstabelecimentos), Empresas int NOT NULL, FOREIGN KEY (Empresas) REFERENCES Empresas(idEmpresas), NrFilial int, Nome VARCHAR(45), Enabled BOOLEAN)";
  con.query(sql3, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  })
  //Cria a tabela UsuariosEstabelecimentos
  var sql4 = "CREATE TABLE UsuariosEstabelecimentos (idUsariosEstabelecimentos int NOT NULL AUTO_INCREMENT, PRIMARY KEY (idUsariosEstabelecimentos), Usuarios int NOT NULL, FOREIGN KEY (Usuarios) REFERENCES Usuarios(idUsuarios), Estabelecimentos int NOT NULL, FOREIGN KEY (Estabelecimentos) REFERENCES Estabelecimentos(idEstabelecimentos), Enabled BOOLEAN)";
  con.query(sql4, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  })
  //Cria a tabela Caixas
  var sql5 = "CREATE TABLE Caixas (idCaixas int NOT NULL AUTO_INCREMENT, PRIMARY KEY (idCaixas), Estabelecimentos int NOT NULL, FOREIGN KEY (Estabelecimentos) REFERENCES Estabelecimentos(idEstabelecimentos), NrCaixa int, Enabled BOOLEAN)";
  con.query(sql5, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  })
  //Cria a tabela Tipos
  var sql6 = "CREATE TABLE Tipos (idTipos int NOT NULL AUTO_INCREMENT, PRIMARY KEY (idTipos), Estabelecimentos int NOT NULL, FOREIGN KEY (Estabelecimentos) REFERENCES Estabelecimentos(idEstabelecimentos), Tipo VARCHAR(45), Enabled BOOLEAN)";
  con.query(sql6, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  })
  //Cria a tabela Movimentos
  var sql7 = "CREATE TABLE Movimentos (idMovimentos int NOT NULL AUTO_INCREMENT, PRIMARY KEY (idMovimentos), Caixas int NOT NULL, FOREIGN KEY (Caixas) REFERENCES Caixas(idCaixas), Descricao VARCHAR(45), Valor int, Data DATE, Tipos int NOT NULL, FOREIGN KEY (Tipos) REFERENCES Tipos(idTipos))";
  con.query(sql7, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  })
});
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   });
// });
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
// FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });