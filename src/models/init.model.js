//vamos a importar todos nuestros modelos creados
const Todos = require("./todos.models");
const Users = require("./users.model");
const Categories = require("./categories.model");
const TodosCategories = require("./todos-categories.model");

const initModels = () => {
  Users;
  Todos;
  Categories;
  TodosCategories;
  //vamos a crear las relaciones
  Todos.belongsTo(Users, { as: "author", foreignKey: "user_id" });
  Users.hasMany(Todos, { as: "task", foreignKey: "user_id" });

  TodosCategories.belongsTo(Todos, { as: "task", foreignKey: "todo_id" });
  Todos.hasMany(TodosCategories, { as: "category", foreignKey: "todo_id" });

  TodosCategories.belongsTo(Categories, {
    as: "category",
    foreignKey: "category_id",
  });
  Categories.belongsTo(TodosCategories, {
    as: "task",
    foreignKey: "category_id",
  });
};

module.exports = initModels;
