const http = require("http");
const app = require("./app");
const serverController = require("./middlewares/server.middleware");
const port = serverController.normalizePort(process.env.PORT || "4000");
app.set("port", port);
const server = http.createServer(app);

function logServerDetails() {
    const address = server.address();
    const serverAddressType = typeof address === "string" ? "pipe " + address : "port " + port;
    console.info("===================================");
    console.info(`Service listening on port: ${serverAddressType}`);
    console.info(`URL: http://localhost:${port}`);
    console.info(`Doc: http://localhost:${port}/api-docs/`);
    console.info("   ")
    console.info(`Server started at: ${new Date()}`);
    console.info("===================================");
}

server.on("error", serverController.errorHandler);

server.on("listening", logServerDetails);

server.listen(port);