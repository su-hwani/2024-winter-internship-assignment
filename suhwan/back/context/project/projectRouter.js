const express = require('express');
const projectController = require('./projectController');
const projectRouter = express.Router();

const taskRouter = require('./task/taskRouter')

projectRouter.post('/', projectController.createProject);
projectRouter.get('/', projectController.getAllProjects);
projectRouter.get('/:projectId', projectController.getProjectById);
projectRouter.delete('/:projectId', projectController.deleteProject);

projectRouter.use('/:projectId/tasks', taskRouter);

module.exports = projectRouter;