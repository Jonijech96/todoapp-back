//instancia de coneccion para la bd
const db = require("../utils/database");

//tipos de datos de secualize varchar --> string
const { DataTypes } = require("sequelize");

//definir modelo de users
//los modelos van con mayuscula
//parametros=> nombre de tabla, atributos de tabla(un objeto)
const Users = db.define("users", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Users;
