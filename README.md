# AndreVital-Lucrum

O projeto se resume em um aplicativo que recebe como informação valores de entrada e de saída de um de 'n' caixas disponíveis no empreendimento. Cada caixa terá usuários registrados e suas entradas e saídas podem ser por meio de cartão ou dinheiro, sendo tudo armazenado em um banco de dados. A motivação é  poder gerar um meio de facilitar e automatizar o controle financeiro de pequenos empreedimentos, onde tudo ainda é feito no papel, que por fim, informara ao dono do estabelecimento se o mesmo esta lucrando em seu negócio.
# Fluxograma
<Img src="https://github.com/PEE-2019-ELO-COM/AndreVital-Lucrum/blob/master/fluxoLucrum-1.png">
 
 <br>
 
 # Diagrama de Classes
 
<Img src="https://github.com/PEE-2019-ELO-COM/AndreVital-Lucrum/blob/master/Lucrum.png">
 
<br>
 
# GUI Inicial

<Img src="https://github.com/PEE-2019-ELO-COM/AndreVital-Lucrum/blob/master/GUI_Inicial-1.png">
 
<br> 

# Para criar o app
 
  Após clonar o repositório:
  <br>
  npm init
 
  Para instalar sua database nas dependências do seu projeto:
   <br>
  npm install mysql
  
  Para instalar express nas dependências do seu projeto:
   <br>
  npm install express
  
  Para criar uma database:
   <br>
  Entre no arquivo database.js e coloque seu usuário e senha do seu mysql
  e depois execute no terminal o mesmo arquivo com
   <br>
  node database.js
  
  E logo em seguida para criar as tabelas:
   <br>
  node Tables.js
<br>
 Agora para popular o banco de dados, fazendo se do uso da api, será necessário a instalação do Postman. O tutorial para instalação do mesmo se encontra no link a seguir
 <br>
 https://linux4one.com/how-to-install-postman-in-linux/
 <br>
 Após a instalação, basta importar os requests, pelo postman, com o link a seguir
 <br>
 https://www.getpostman.com/collections/3b8a132165352c07f39f
 <br>
 Em seguida, incializa-se a api no terminal com o comando a seguir
<br>
node models.js
<br>
Agora só falta usar o postman para efetuar todos os requests necessários (pode ser alterado manualmente os valores dos campos ao clicar em "body" no postman)
