// importamos express
const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.model");

// crear instancia express
const app = express();

const PORT = 8000;

//probando la conexion a sequalize
db.authenticate()
  .then(() => console.log("Autenticacion exitosa"))
  .catch((error) => console.log(error));

initModels();
//vamos a usar el metodo sinc de nuestra bd
//db.sync({force: true})
db.sync({ alter: true })
  .then(() => console.log("base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  // lo mismo se puede poner por separado
  res.status(200).json({ message: "Bienvenido al servidor" });
});

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});
