const bcrypt = require("bcrypt");


module.exports = async (data, createUsers) => {
    const {email, password} = data;
    const hash = await bcrypt.hash(password, 10);

    await createUsers({email, hash})

}