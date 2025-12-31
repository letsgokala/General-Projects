const schemas = require("../schemas"); // this finds the file index.js inside the schema folder and in that file we should return all the schemas as one object

module.exports = (schemaName) => (req, res, next) => {
    const schema = schemas[schemaName] || null;

    if (schema){                
        const {error} = schema.validate(req.body);

        if (error)
            res.sendStatus(404);
        else
            next();
    } else
        res.sendStatus(501);
        
    
}