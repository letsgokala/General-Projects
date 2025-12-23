const express = require("express");
const healtheController = require("../controllers/health")

module.exports = (env) => {
    const app = express();

    app.get("/health", healtheController);

    return app;
}