const { Router } = require("express");
const {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
  getUserWithTasks,
} = require("../controllers/users.controller");

const router = Router();

//controladores

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);

//obtener ususario con sus tareas
router.get("/users/:id/todos", getUserWithTasks);

module.exports = router;
