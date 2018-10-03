import { DbModelController } from "../controllers";
import { IAppRoute } from "../interfaces";
import { ControllerConfig } from "../config";
import { AppBaseRoute } from "./app-base.route";

export class DbModelRoute extends AppBaseRoute implements IAppRoute {

    private readonly controller: DbModelController;

    constructor(
        controllerConfig: ControllerConfig) {

        super(controllerConfig)

        this.controller = new DbModelController();

        this.routes.push(...[
            {
                path: "/dbmodel/auth",
                method: "GET",
                handler: this.controller.auth,
                options: {
                    pre: [
                        {
                            method: () => { return controllerConfig; },
                            assign: "controllerConfig"
                        }
                    ]
                }
            }
        ]);
    }
}