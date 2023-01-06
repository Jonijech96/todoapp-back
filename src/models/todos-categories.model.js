const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Categories = require("./categories.model");
const Todos = require("./todos.models");

const TodosCategories = db.define(
  "todos_categories",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      field: "category_id",
      references: {
        model: Categories,
        key: "id",
      },
    },
    todoId: {
      type: DataTypes.INTEGER,
      field: "todo_id",
      references: {
        model: Todos,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = TodosCategories;
