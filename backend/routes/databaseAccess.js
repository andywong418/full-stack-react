const express = require('express');
const router = express.Router();
const TodoItem = require('../models/ToDoItem');

router.post('/add', (req, res) => {
  const testTodo = new TodoItem({
  task: req.body.taskText
});

testTodo.save()
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error);
  })

});

module.exports = router;
