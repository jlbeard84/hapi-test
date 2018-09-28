import { HelloModel } from "../models";
import { Request, ResponseObject, ResponseToolkit } from "hapi";

export class HelloController {

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
