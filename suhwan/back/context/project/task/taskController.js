const prisma = require('../../../prisma/prismaClient');
const logger = require('../../../utils/logger')
const { successResponse, errorResponse } = require('../../../utils/response');

exports.createTask = async (req, res) => {
    try {
        const { projectId } = req.params;
        const { pjId, title, description, priority, dueDate } = req.body;

        if (pjId != projectId) {
            return errorResponse(res, 'Path projectId and body pjId do not match', 400);
        }
        const projectExists = await prisma.project.findUnique({
            where: {
                id: pjId,
            },
        })
        if (!projectExists) {
            return errorResponse(res, 'Project not found', 404);
        }
        const newTask = await prisma.task.create({
            data: { 
                title, 
                description, 
                priority: priority.toUpperCase(), 
                dueDate: new Date(dueDate),
                project: {
                    connect: {
                        id: pjId,
                    },
                },
            },
        });
        return successResponse(res, newTask, 201);
    } catch (error) {
        logger.error(`createTask Error: ${error.message}`);
        return errorResponse(res, 'Failed to create task', 500);
    }
};

exports.getAllTasksByProjectId = async (req, res) => {
    try {
        const { projectId } = req.params;
        const projectWithTasks = await prisma.project.findUnique({
            where: {
                id: projectId,
            },
            include: {
                tasks: true,
            },
        });
        if (!projectWithTasks) {
            return errorResponse(res, 'Project not found', 404);
        }
        return successResponse(res, projectWithTasks.tasks, 200);
    } catch (error) {
        logger.error(`getAllTasksByProjectId Error: ${error.message}`);
        return errorResponse(res, 'Failed to retrieve tasks', 500);
    }
};

exports.updateTask = async (req, res) => {
    try {
        const { projectId, taskId } = req.params;
        const { title, priority, dueDate, status } = req.body;
        const projectWithTask = await prisma.project.findUnique({
            where: { 
                id: projectId, 
            },
            include: {
                tasks: {
                    where: { 
                        id: taskId, 
                    },
                },
            },
        });
        if (!projectWithTask) {
            return errorResponse(res, 'Project not found', 404);
        }
        if (projectWithTask.tasks.length === 0) {
            return errorResponse(res, 'Task not found in the specified project', 404);
        }
        const updatedTask = await prisma.task.update({
            where: { 
                id: taskId,
                pjId: projectId,
            },
            data: { 
                title, 
                priority: priority.toUpperCase(),
                dueDate: new Date(dueDate), 
                status: status.toUpperCase(),
            },
        });
        return successResponse(res, updatedTask, 200);
    } catch (error) {
        logger.error(`updateTask Error: ${error.message}`);
        return errorResponse(res, 'Failed to update task', 400);
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const { projectId, taskId } = req.params;
        const projectWithTask = await prisma.project.findUnique({
            where: { 
                id: projectId, 
            },
            include: {
                tasks: {
                    where: {
                        id: taskId, 
                    },
                },
            },
        });
        if (!projectWithTask) {
            return errorResponse(res, 'Project not found', 404);
        }
        if (projectWithTask.tasks.length === 0) {
            return errorResponse(res, 'Task not found in the specified project', 404);
        }
        await prisma.task.delete({
            where: { 
                id: taskId, 
                pjId: projectId,
            },
        });
        return successResponse(res, null, 204);
    } catch (error) {
        logger.error(`deleteTask Error: ${error.message}`);
        return errorResponse(res, 'Failed to delete task', 400);
    }
};