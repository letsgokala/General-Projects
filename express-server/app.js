const { log } = require("console");
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/hello", (req, res) => {
    res.send("hello world");
});

app.post("/login", express.json(), (req, res) => {
    const { email, password } = req.body;

    if (email == "user@mail.com" && password === "password"){
        res.json({
            token: "access_token"
        }); 
    } else {
        res.status(401).json({
            error: "Invalid_credentials"
        });
    }
});

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);    
})