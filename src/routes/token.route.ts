import { TokenController } from "../controllers";
import { IAppRoute } from "../interfaces";
import { ServerRoute } from "hapi";
import { ControllerConfig } from "../config";

export class TokenRoute implements IAppRoute {

    private readonly controller: TokenController;

    public routes: ServerRoute[] = [];

    constructor(
        controllerConfig: ControllerConfig) {

        this.controller = new TokenController(controllerConfig)

        this.routes = [
            {
                path: "/token",
                method: "POST",
                handler: this.controller.post,
                options: {
                    auth: false
                }
            }
        ]
    }
}