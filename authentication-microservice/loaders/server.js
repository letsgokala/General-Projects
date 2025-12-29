const express = require("express");
const healtheController = require("../controllers/health")
const fallbackController = require("../controllers/fallback")
const loginController = require("../controllers/login")
const signUpController = require("../controllers/signup")

module.exports = (env) => {
    const app = express();

    app.get("/health", healtheController);

    app.post("/auth/login", loginController)

    app.post("/auth/signup", signUpController)

    app.use(fallbackController)

    return app;
}