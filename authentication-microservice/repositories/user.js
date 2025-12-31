module.exports = (model) => ({
    read: (email) => model.findOne({
        attribute: ['id', "hash"],
        where: { email }
    }),
    create: ({email, hash}) => model.create({ email, hash })
});