import { HelloController } from "../controllers";
import { IAppRoute } from "../interfaces";
import { ControllerConfig } from "../config";
import { AppBaseRoute } from "./app-base.route";

export class HelloRoute extends AppBaseRoute implements IAppRoute {

    private readonly controller: HelloController;

    constructor(
        controllerConfig: ControllerConfig) {
        
        super(controllerConfig);

        this.controller = new HelloController();

        this.routes.push(...[
            {
                path: "/hello",
                method: "GET",
                handler: this.controller.get
            },
            {
                path: "/hello/{num}",
                method: "GET",
                handler: this.controller.get
            }
        ]);
    }
}