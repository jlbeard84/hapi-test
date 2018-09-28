import { Request, ResponseObject, ResponseToolkit } from "hapi";

export class RootController {

    public get(request: Request, h: ResponseToolkit): ResponseObject {
        return h.response("Hello, World!!");
    }

    public post(request: Request, h: ResponseToolkit): ResponseObject {
        return h.response(request.payload);
    }
}
