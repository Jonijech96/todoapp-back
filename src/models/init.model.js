//vamos a importar todos nuestros modelos creados
const Todos = require("./todos.model");
const Users = require("./users.model");
const Categories = require("./categories.model");
const TodosCategories = require("./todos-categories.model");

const initModels = () => {
  //vamos a crear las relaciones
  Todos.belongsTo(Users, { as: "author", foreignKey: "user_id" });
  Users.hasMany(Todos, { as: "task", foreignKey: "user_id" });

  TodosCategories.belongsTo(Todos, { as: "task", foreignKey: "todo_id" });
  Todos.hasMany(TodosCategories, { as: "categories", foreignKey: "todo_id" });

  TodosCategories.belongsTo(Categories, {
    as: "category",
    foreignKey: "category_id",
  });
  Categories.hasMany(TodosCategories, {
    as: "task",
    foreignKey: "category_id",
  });

  Users.hasMany(Categories, { as: "categories_user", foreignKey: "user_id" });
  Categories.belongsTo(Users, { as: "author_cat", foreignKey: "user_id" });
};

module.exports = initModels;
