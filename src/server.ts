import { Server, Request, ResponseToolkit } from "hapi";
import { HelloModel } from "./models";

const server: Server = new Server({
    port: 8000,
    host: "localhost"
});

const helloHandler = (request: Request, h: ResponseToolkit) => {
    const numParam: string = request.params["num"];
    let num: number = 0;

    if (!numParam || isNaN(Number(numParam))) {
        num = 1;
    } else {
        num = Number(numParam);
    }

    let responseObject = new HelloModel();
    responseObject.models = [];

    for (let i = 0; i < num; i++) {
        responseObject.models.push(new HelloModel(`Sub-Model #${i + 1}`));
    }

    return responseObject;
};

server.route({
    method: "GET",
    path: "/",
    handler: (request: Request, h: ResponseToolkit) => {
        return "Hello, World";
    }
});

server.route({
    method: "GET",
    path: "/hello",
    handler: helloHandler
});

server.route({
    method: "GET",
    path: "/hello/{num}",
    handler: helloHandler
});

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", (error: Error) => {
    process.exit(1);
});

init();