const userRepository = require("./user");

module.exports = (model) => ({    
        user: userRepository(model.user)    
})