import { RootController } from "../controllers";
import { IAppRoute } from "../interfaces";
import { ServerRoute } from "hapi";
import { ControllerConfig } from "../config";

export class RootRoute implements IAppRoute {

    private readonly controller: RootController;

    public routes: ServerRoute[] = [];

    constructor(        
        controllerConfig: ControllerConfig) {

        this.controller = new RootController(controllerConfig);

        this.routes = [
            {
                path: "/",
                method: "GET",
                handler: this.controller.get,
                options: {
                    auth: false
                }
            },
            {
                path: "/",
                method: "POST",
                handler: this.controller.post,
                options: {
                    auth: false
                }
            }
        ]
    }
}