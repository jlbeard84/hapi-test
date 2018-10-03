import { RootController } from "../controllers";
import { IAppRoute } from "../interfaces";
import { ControllerConfig } from "../config";
import { AppBaseRoute } from "./app-base.route";

export class RootRoute extends AppBaseRoute implements IAppRoute {

    private readonly controller: RootController;

    constructor(        
        controllerConfig: ControllerConfig) {

        super(controllerConfig);

        this.controller = new RootController();

        this.routes.push({
            path: "/",
            method: "GET",
            handler: this.controller.get,
            options: {
                auth: false
            }
        });

        this.routes.push({
            path: "/",
            method: "POST",
            handler: this.controller.post,
            options: {
                auth: false
            }
        });
    }
}