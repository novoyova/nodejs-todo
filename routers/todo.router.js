const router = require('express').Router();
const TodoController = require('../controller/todo.controller');

router.post('/createTodo', TodoController.createTodo);
router.get('/getUserTodoList', TodoController.getUserTodo);
router.delete('/deleteTodo', TodoController.deleteTodo);

module.exports = router;