const bcrypt = require("bcrypt");

let users = [];

const createFakeUsers = (data) => {
    if (users.indexOf(data.email) === -1){
        users.push(data.email);
        return Promise.resolve();
    }
    return Promise.reject(Error("Email is already in use!!!"));
}

module.exports = async (data) => {
    const {email, password} = data;
    const hash = await bcrypt.hash(password, 10);

    await createFakeUsers({email, hash})

}