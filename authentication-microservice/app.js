const Env = require("./loaders/environment")
const Server = require("./loaders/server");
const Database = require("./loaders/database");

(async () => {
    try {
        const env = Env();
        const db = await Database(env);
        const server = Server(env);

        server.listen(env.server.port, () => {
            console.log(`server running on port ${env.server.port}`);
        })
    } catch (error) {
        console.log(error);
        process.exit(1); // process end with error
    }

})();