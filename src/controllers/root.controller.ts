import { Request, ResponseObject, ResponseToolkit } from "hapi";
import { ControllerConfig } from "../config";
import { BaseController } from "./base.controller";

export class RootController extends BaseController {

    constructor(controllerConfig: ControllerConfig) {
        super(controllerConfig);
    }

    public get(request: Request, h: ResponseToolkit): ResponseObject {
        return h.response("Hello, World!!");
    }

    public post(request: Request, h: ResponseToolkit): ResponseObject {
        return h.response(request.payload);
    }
}
