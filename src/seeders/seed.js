const db = require("../utils/database");
const Users = require("../models/users.model");
const Todos = require("../models/todos.model");
const Categories = require("../models/categories.model");
const TodosCategories = require("../models/todos-categories.model");

const users = [
  { username: "Iannacuss", email: "ian@gmail.com", password: "1234" },
  { username: "Lucero", email: "lucero@gmail.com", password: "1234" },
  { username: "Kelvin", email: "kelvin@gmail.com", password: "1234" },
];

const todos = [
  { title: "estudiar node", description: "sharala", userId: 1 },
  { title: "dormir", userId: 2 },
  { title: "lavar platos", userId: 3 },
  { title: "ir a chequeo mensual", userId: 3 },
];

const categories = [
  { name: "personal", userId: 1 },
  { name: "educacion", userId: 2 },
  { name: "salud", userId: 3 },
  { name: "trabajo", userId: 3 },
  { name: "hogar", userId: 2 },
  { name: "cocina", userId: 2 },
  { name: "deporte", userId: 2 },
  { name: "ocio", userId: 2 },
  { name: "financiero", userId: 2 },
  { name: "entretenimiento", userId: 2 },
];

const todosCategories = [
  { categoryId: 1, todoId: 1 },
  { categoryId: 2, todoId: 2 },
  { categoryId: 3, todoId: 3 },
  { categoryId: 4, todoId: 4 },
];

db.sync({ force: true }).then(() => {
  console.log("inyectando");
  users.forEach((user) => Users.create(user));
  setTimeout(() => {
    categories.forEach((category) => Categories.create(category));
  }, 100);
  setTimeout(() => {
    todos.forEach((todo) => Todos.create(todo));
  }, 200);
  setTimeout(() => {
    todosCategories.forEach((todo) => TodosCategories.create(todo));
  }, 300);
});
