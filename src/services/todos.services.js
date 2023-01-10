const Todos = require('../models/todos.model');

class TodosServices {
    static async getAll() {
        try {
          const result = await Todos.findAll();
          return result;
        } catch (error) {
          throw error;
        }
      }
    
    static async getById(id){
        try {
            const result = await Todos.findByPk(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(user){
        try {
            const result = await Todos.create(user);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id){
        try {
            const result = await Todos.destroy({where: {id}});
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(field,id){
      try {
        const result = await Todos.update(fiel, {where: {id}});
        return result;
      } catch (error) {
        throw error;
      }
    }
}

module.exports = TodosServices;