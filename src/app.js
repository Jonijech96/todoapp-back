// importamos express
const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.model");
const Users = require("./models/users.model");
const Todos = require("./models/todos.model");
const UserRouter = require("./routes/users.routes");
const TodoRouter = require('./routes/todos.routes');

// crear instancia express
const app = express();
app.use(express.json());
const PORT = 8000;

//probando la conexion a sequalize
db.authenticate()
  .then(() => console.log("Autenticacion exitosa"))
  .catch((error) => console.log(error));

initModels();
//vamos a usar el metodo sinc de nuestra bd
//db.sync({force: true})
db.sync({ force: false })
  .then(() => console.log("base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  // lo mismo se puede poner por separado
  res.status(200).json({ message: "Bienvenido al servidor" });
});

app.use("/api/v1", UserRouter);
app.use("/api/v1", TodoRouter);

app.get("/users", async (req, res) => {
  try {
    const result = await Users.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

app.get("/todos", async (req, res) => {
  try {
    const result = await Todos.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const result = await Users.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todos.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/user/username/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const result = await Users.findOne({ where: { username } });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});
app.post("/users", async (req, res) => {
  try {
    const user = req.body;
    const result = await Users.create(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
});

app.post("/todos", async (req, res) => {
  try {
    const todos = req.body;
    const result = await Todos.create(todos);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const field = req.body;
    const { id } = req.params;
    const result = await Users.update(field, { where: { id } });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await Todos.update(field, { where: { id } });
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.destroy({ where: { id } });
    res.status(200).json(result);
    //validar que el usuario no tenga tareas
    //si tiene responder que no se puede, sino eliminar
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todos.destroy({ where: { id } });
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});
