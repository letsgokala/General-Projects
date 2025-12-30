const express = require("express");
const healtheController = require("../controllers/health")
const fallbackController = require("../controllers/fallback")
const loginController = require("../controllers/login")
const signUpController = require("../controllers/signup")

module.exports = (env) => {
    const app = express();

    app.post("/foo", express.json(), (req, res) => { // now this middleware only parses json format body so if other type of headers were specified it will pass an empty json
        console.log(req.body);
        res.sendStatus(200);
    });
    
    app.use("/auth", express.urlencoded()); // NOW endpoints starting with /auth will have this middleware applied to them
    // but if other type of header content type was used it will return an empty {} or undefined

    app.get("/health", healtheController);

    app.post("/auth/login", loginController)

    app.post("/auth/signup", signUpController)

    app.use(fallbackController)

    return app;
}