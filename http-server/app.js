import http from "http";

const port = 3000;
const server = http.createServer((req, res) => {

});

server.on("connection", () => {
    console.log("New client connection");    
})

server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});