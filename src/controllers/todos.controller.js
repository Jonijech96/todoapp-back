const TodosServices = require("../services/todos.services");

const getAllTodos = async (req, res) => {
  try {
    const result = await TodosServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getTodoWithCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.getWithCategories(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.delete(id);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateTodo = async (req, res) => {
  try {
    const field = req.body;
    const { id } = req.params;
    const result = await TodosServices.update(field, id);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createTodo = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await TodosServices.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  deleteTodo,
  updateTodo,
  getTodoWithCategories,
};
