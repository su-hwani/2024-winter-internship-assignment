exports.successResponse = (res, data, statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message: 'Success',
        data,
    });
};

exports.errorResponse = (res, errorMessage, statusCode = 500) => {
    return res.status(statusCode).json({
        success: false,
        message: errorMessage,
    });
};