module.exports = {
    INVALID_EMAIL_OR_PASSWORD: {
        statusCode: 400,
        message: "Ivalid email address or password"
    },
    INCORRECT_PASSWORD: {
        statusCode: 401,
        message: "Ivalid password"
    },
    USER_NOT_FOUND: {
        statusCode: 404,
        message: "User Not Found"
    },
    DB_DROP_ENTITY: {
        statusCode: 409,
        message: "Email address already exists"
    },
    INTERNAL_ERROR: {
        statusCode: 500,
        message: "Internal server error"
    },
}