import { TokenController } from "../controllers";
import { IAppRoute } from "../interfaces";
import { ServerRoute } from "hapi";

export class TokenRoute implements IAppRoute {

    private readonly controller: TokenController = new TokenController();

    public routes: ServerRoute[] = [];

    constructor() {
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