const express = require('express');
const taskController = require('./taskController');

const taskRouter = express.Router({ mergeParams: true });

taskRouter.post('/', taskController.createTask);
taskRouter.get('/', taskController.getAllTasksByProjectId);
taskRouter.put('/:taskId', taskController.updateTask);
taskRouter.delete('/:taskId', taskController.deleteTask);

module.exports = taskRouter;