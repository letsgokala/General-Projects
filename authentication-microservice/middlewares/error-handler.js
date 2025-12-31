const errorCode = require("../constants/error-codes")

module.exports = (err, req , res, next) => {
    const code = (err && err.code) || (err && err.original && err.original.code) || null;
    const error = errorCode[code] || errorCode["INTERNAL_ERROR"];

    return res.status(error.statusCode).json({message: error.message});
}