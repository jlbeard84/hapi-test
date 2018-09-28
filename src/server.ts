import { Server } from "hapi";
import { HelloRoute, RootRoute } from "./routes";
import { IAppRoute } from "./interfaces";

const server: Server = new Server({
    port: 8000,
    host: "localhost"
});

const appRoutes: IAppRoute[] = [
    new RootRoute(),
    new HelloRoute()
];

for (const appRoute of appRoutes) {
    for (const route of appRoute.routes) {
        server.route(route);
    }
}

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", (error: Error) => {
    process.exit(1);
});

init();