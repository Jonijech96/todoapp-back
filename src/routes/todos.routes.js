const { Router } = require("express");
const {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  getTodoWithCategories,
} = require("../controllers/todos.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

// controladores

router.get("/todos", authMiddleware, getAllTodos);
router.get("/todos/:id", getTodoById);
router.delete("/todos/:id", deleteTodo);
router.put("/todos/:id", updateTodo);
router.post("/todos", createTodo);

// obtener tarea con sus categorias
router.get("/todos/:id/categories", getTodoWithCategories);

module.exports = router;
