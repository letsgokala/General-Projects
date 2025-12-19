import http from "http";

const port = 3000;
const server = http.createServer((req, res) => {
    if(req.method === "GET" && req.url === "/hello") {
        res.statusCode = 200;
        res.setHeader("content-type", "plain/text");
        res.end("hello world");
    } else if (
        req.method === "POST" &&
        req.url === "/login" &&
        req.headers['Content-Type'] === "application/json"
    ) {
        let data = "";

        req.on("data", chunck => {
            data += chunck;
        });

        req.on("end", () => {
            const { email, password } = JSON.parse(data);
            let body;

            if ( email === "user@gmail.com" && password === "password" ) {
                body = {
                    token: "access_token"
                }; 
                res.statusCode = 200;
            } else {
                body = {
                    error: "invalid_credentials"
                };
                res.statusCode = 401;
            }

            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(body));
        })
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "plain/text");
        res.end("Not Found");
    }
});

server.on("connection", () => {
    console.log("New client connection");    
})

server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});