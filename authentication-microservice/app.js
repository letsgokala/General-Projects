const Env = require("./loaders/environment")
const Server = require("./loaders/server");
const Database = require("./loaders/database");
const Models = require("./models");
const Repositories = require("./repositories");


(async () => {
    try {
        const env = Env();
        const db = await Database(env);
        const models = await Models(db, env);
        const repos = await Repositories(models)
        const server = Server(env, repos);

        server.listen(env.server.port, () => {
            console.log(`server running on port ${env.server.port}`);
        });

        process.on("SIGINT", async () => {
            try {
                await db.close();
                console.log("Database connection closed");
                process.exit(0);
            } catch (error) {
                console.error(error);
                process.exit(1);
            }
        });
    } catch (error) {
        console.log(error);
        process.exit(1); // process end with error
    }

})();