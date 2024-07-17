const http = require("http");
const app = require("./app");
const serverController = require("./middlewares/server.middleware");
/**
 * Represents the port number to be used by the server.
 * If the environment variable "PORT" is defined, it will be used.
 * Otherwise, the port number will default to 4000.
 *
 * @type {number} The port number.
 */
const port = serverController.normalizePort(process.env.PORT || "4000");
app.set("port", port);
/**
 * Represents a server that uses the HTTP protocol and creates an instance of an app.
 *
 * @class
 * @constructor
 * @param {Object} app - The application object to be served.
 * @returns {http.Server} - An instance of the HTTP server.
 */
const server = http.createServer(app);

/**
 * Logs server details including the server address, listening port, URL, API documentation URL, and the start time of the server.
 *
 * @return {void}
 */
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