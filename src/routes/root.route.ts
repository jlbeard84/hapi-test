import { RootController } from "../controllers";
import { IAppRoute } from "../interfaces";
import { ServerRoute } from "hapi";

export class RootRoute implements IAppRoute {

    private readonly controller: RootController = new RootController();

    public routes: ServerRoute[] = [];

    constructor() {
        this.routes = [
            {
                path: "/",
                method: "GET",
                handler: this.controller.get
            },
            {
                path: "/",
                method: "POST",
                handler: this.controller.post
            }
        ]
    }
}