import { TokenController } from "../controllers";
import { IAppRoute } from "../interfaces";
import { ControllerConfig } from "../config";
import { AppBaseRoute } from "./app-base.route";

export class TokenRoute extends AppBaseRoute implements IAppRoute {

    private readonly controller: TokenController;

    constructor(
        controllerConfig: ControllerConfig) {

        super(controllerConfig);

        this.controller = new TokenController()

        this.routes.push({
            path: "/token",
            method: "POST",
            handler: this.controller.post,
            options: {
                auth: false
            }
        });
    }
}