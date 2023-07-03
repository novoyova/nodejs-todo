const TodoModel = require('../model/todo.model');

class TodoService {
  static async createTodo(userId, title, description) {
    const createTodo = new TodoModel({userId, title, description});
    return await createTodo.save();
  }

  static async getTodoData(userId) {
    const todoData = await TodoModel.find({userId});
    return todoData;
  }

  static async deleteTodo(todoId) {
    const deleted = await TodoModel.findOneAndDelete({_id: todoId});
    return deleted;
  }
}

module.exports = TodoService;