import { Server, ServerOptions } from "hapi";
import { HelloRoute, RootRoute, TokenRoute } from "./routes";
import { IAppRoute, IAppMiddleware } from "./interfaces";
import { AuthorizationMiddleware } from "./middleware";
import { Config, ControllerConfig } from "./config";

const config: Config = new Config();

const serverOptions: ServerOptions = {
    port: config.Port,
    host: "localhost"
};

const server: Server = new Server(serverOptions);

const controllerConfig = new ControllerConfig();

const appRoutes: IAppRoute[] = [
    new RootRoute(controllerConfig),
    new TokenRoute(controllerConfig),
    new HelloRoute(controllerConfig)
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