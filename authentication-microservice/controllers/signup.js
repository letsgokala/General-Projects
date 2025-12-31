const signup = require("../services/signup");

module.exports = async (req, res) => {
try {
    await signup(req.body)
    res.sendStatus(201);
} catch (error) {
    console.error(error);
    res.sendStatus(500);
}
}