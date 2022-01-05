const TodoService = require('../services/TodoService');

exports.getAll = async (req, res) => {
    try {
        const todos = await TodoService.getAll();
        res.json(todos);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

exports.get = async (req, res) => {
    try {
        const todo = await TodoService.get(req.params.id);
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.json(todo);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

exports.add = async (req, res) => {
    try {
        const createdTodo = await TodoService.add(req.body);
        res.status(201).json(createdTodo);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

exports.update = async (req, res) => {
    try {
        const updatedTodo = await TodoService.update(req.params.id, req.body);
        res.status(201).json(updatedTodo);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

exports.delete = async (req, res) => {
    try {
        const deletedTodo = await TodoService.delete(req.params.id);
        res.status(201).json(deletedTodo);
    } catch (error) {
        return res.status(500).json({ error: error });
    }   
}
