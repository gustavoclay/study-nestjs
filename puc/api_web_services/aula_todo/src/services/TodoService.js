const Todo = require("../models/Todo");

module.exports = class TodoService {

    static async getAll() {
        try {
            const todos = await Todo.find();
            return todos;
        } catch (error) {
            console.log(`Error getAll todos: ${error}`);
        }
    }

    static async get(id) {
        try {
            const todo = await Todo.findById(id);
            return todo;
        } catch (error) {
            console.log(`Error get todo: ${error}`);
        }
    }

    static async add(data) {
        try {
            const newTodo = {
                title: data.title,
                description: data.description,
                date: data.date,
                finished: data.finished,
            };
            const response = await new Todo(newTodo).save();
            return response;
        } catch (error) {
            console.log(`Error add todo: ${error}`);
        }
    }

    static async update(id, data) {
        try {
            const newTodo = {
                title: data.title,
                description: data.description,
                finished: data.finished,
            };
            const updatedTodo = await Todo.findOneAndUpdate({ _id: id }, newTodo, { new: true });
            return updatedTodo;
        } catch (error) {
            console.log(`Error update todo: ${error}`);
        }
    }

    static async delete(id) {
        try {
            const deletedTodo = await Todo.findByIdAndDelete(id);
            return deletedTodo;
        } catch (error) {
            console.log(`Error delete todo: ${error}`);
        }
    }

}