import { HelloModel } from "../models";
import { Request, ResponseObject, ResponseToolkit } from "hapi";
import { BaseController } from "./base.controller";
import { ControllerConfig } from "../config";

export class HelloController extends BaseController {

    constructor(controllerConfig: ControllerConfig) {
        super(controllerConfig);
    }

    public get(request: Request, h: ResponseToolkit): ResponseObject {

        const numParam: string = request.params["num"];
        let num: number = 0;
    
        if (!numParam || isNaN(Number(numParam))) {
            num = 1;
        } else {
            num = Number(numParam);
        }
    
        let responseObject = new HelloModel();
        responseObject.models = [];
    
        for (let i = 0; i < num; i++) {
            responseObject.models.push(new HelloModel(`Sub-Model #${i + 1}`));
        }
    
        return h.response(responseObject);
    }
}
