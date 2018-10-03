import { ControllerConfig } from "../config";

export abstract class BaseController {

    public readonly ControllerConfig: ControllerConfig;

    constructor(
        controllerConfig: ControllerConfig) {

        if (!controllerConfig) {
            throw new Error("ControllerConfig must not be null");
        }

        this.ControllerConfig = controllerConfig;
    }
}