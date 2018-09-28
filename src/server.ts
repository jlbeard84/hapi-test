import { Server, Request, ResponseToolkit } from "hapi";

const server: Server = new Server({
    port: 8000,
    host: "localhost"
});

server.route({
    method: "GET",
    path: "/",
    handler: (request: Request, h: ResponseToolkit) => {
        return "Hello, World";
    }
});

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", (error: Error) => {
    process.exit(1);
});

init();