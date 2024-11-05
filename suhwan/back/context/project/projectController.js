const prisma = require('../../prisma/prismaClient');
const { successResponse, errorResponse } = require('../../utils/response');
const logger = require('../../utils/logger')

exports.createProject = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newProject = await prisma.project.create({
            data: { 
                title, 
                description, 
            },
        });
        return successResponse(res, newProject, 201);
    } catch (error) {
        logger.error(`createProject Error: ${error.message}`);
        return errorResponse(res, 'Failed to create project', 500);
    }
};

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await prisma.project.findMany();
        return successResponse(res, projects, 200);
    } catch (error) {
        logger.error(`getAllProjects Error: ${error.message}`);
        return errorResponse(res, 'Failed to retrieve projects', 500);
    }
};

exports.getProjectById = async (req, res) => {
    try {
        const { projectId } = req.params;
        const project = await prisma.project.findUnique({
            where: { 
                id: projectId,
            },
            include: {
                tasks: true,
            },
        });
        if (project) {
            return successResponse(res, project, 200);
        } else {
            return errorResponse(res, 'Project not found', 404);
        }
    } catch (error) {
        logger.error(`getProjectById Error: ${error.message}`);
        return errorResponse(res, 'Failed to retrieve user', 500);
    }
};

exports.deleteProject = async (req, res) => {
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
        if (projectWithTasks.tasks.length > 0) {
            return errorResponse(res, 'Project cannot be deleted because it has associated tasks', 400);
        }
        await prisma.project.delete({
            where: { 
                id: projectId,
            },
        });
        return successResponse(res, null, 204);
    } catch (error) {
        logger.error(`deleteProject Error: ${error.message}`);
        return errorResponse(res, 'Failed to delete project', 500);
    }
};