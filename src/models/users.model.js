//instancia de coneccion para la bd
const db = require("../utils/database");

//tipos de datos de secualize varchar --> string
const { Datatypes } = require("sequelize");

//definir modelo de users
//los modelos van con mayuscula
//parametros=> nombre de tabla, atributos de tabla(un objeto)
const Users = db.define("users", {
  id: {
    primaryKey: true,
    type: Datatypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: Datatypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Datatypes.STRING(30),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Datatypes.STRING,
    allowNull: false,
  },
});

module.exports = Users;
