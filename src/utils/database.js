const { Sequelize } = require("sequelize");

//crear una instancia con parametros de configuracion de nuestra base de datos
//dentro un objeto de configuracion que son las credenciales de la base de datos

const db = new Sequelize({
  database: "todoapp",
  username: "postgres",
  host: "localhost", //127.0.0.1
  port: "5432",
  password: "root",
  dialect: "postgres", //base de datos que estamos usando
});

module.exports = db;
