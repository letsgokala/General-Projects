const { config } = require("dotenv");
// const { path } = require("./authentication-microservice/loaders/server");

// we create a module that export a factory function = any function that's not a class and returns an object without using the new keyword
//reason: it allows separation of import and initialization for better and robust error handling 
//because the error might not caught if it was an initialiazed obj and terminate uncontrollably
module.exports = () => {
    const env = config({
        path: `./config/.env.${process.env.NODE_ENV || "development"}`
    });

    if (env.error){
    throw env.error;
    }

    return {
        server: {
            port: parseInt(env.parsed.SERVER_PORT, 10) || 3000
        }
    };

}



