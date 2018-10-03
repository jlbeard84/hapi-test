import { IAppRoute } from "../interfaces";
import { ServerRoute } from "hapi";
import { ControllerConfig } from "config";

export abstract class AppBaseRoute implements IAppRoute {

    public routes: ServerRoute[] = [];

    protected readonly controllerConfig: ControllerConfig;

    constructor(
        controllerConfig: ControllerConfig) {

        this.controllerConfig = controllerConfig;
    }
}