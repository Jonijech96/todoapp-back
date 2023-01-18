const { Sequelize } = require("sequelize");
require("dotenv").config();

//crear una instancia con parametros de configuracion de nuestra base de datos
//dentro un objeto de configuracion que son las credenciales de la base de datos

const db = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  host: process.env.DB_HOST, //127.0.0.1
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  dialect: "postgres", //base de datos que estamos usando
  logging: false,
});

module.exports = db;
