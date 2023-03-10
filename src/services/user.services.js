const Categories = require("../models/categories.model");
const Todos = require("../models/todos.model");
const Users = require("../models/users.model");

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithTasks(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ["username", "email"],
        include: {
          model: Todos,
          as: "task",
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getWithCategories(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ["username", "email"],
        include: {
          model: Categories,
          as: "categories_user",
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await Users.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(field, id) {
    try {
      const result = await Users.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
