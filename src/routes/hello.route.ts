import { HelloController } from "../controllers";
import { IAppRoute } from "../interfaces";
import { ServerRoute } from "hapi";

export class HelloRoute implements IAppRoute {

    private readonly controller: HelloController = new HelloController();

    public routes: ServerRoute[] = [];

    constructor() {
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