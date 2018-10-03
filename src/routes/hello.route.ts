import { HelloController } from "../controllers";
import { IAppRoute } from "../interfaces";
import { ServerRoute } from "hapi";
import { ControllerConfig } from "../config";

export class HelloRoute implements IAppRoute {

    private readonly controller: HelloController;

    public routes: ServerRoute[] = [];

    constructor(
        controllerConfig: ControllerConfig) {

        this.controller = new HelloController(controllerConfig);

        this.routes = [
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
        ]
    }
}