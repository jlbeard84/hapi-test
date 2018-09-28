import { Server } from "hapi";
import { HelloRoute, RootRoute, TokenRoute } from "./routes";
import { IAppRoute, IAppMiddleware } from "./interfaces";
import { AuthorizationMiddleware } from "./middleware";
import { Config } from "config";

const server: Server = new Server({
    port: process.env.PORT || Config.DefaultPort || 8000,
    host: "localhost"
});

const appRoutes: IAppRoute[] = [
    new RootRoute(),
    new TokenRoute(),
    new HelloRoute()
];

const middlewares: IAppMiddleware[] = [
    new AuthorizationMiddleware()
];

const init = async () => {
    
    console.log("Configuring middleware...");

    for (const middleware of middlewares) {
        await middleware.configure(server);
    }
    
    console.log("Configuring routes...");
    
    for (const appRoute of appRoutes) {
        for (const route of appRoute.routes) {
            server.route(route);
        }
    }

    console.log("Starting server...");

    await server.start();

    console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", (error: Error) => {
    console.log(error);
    process.exit(1);
});

init();