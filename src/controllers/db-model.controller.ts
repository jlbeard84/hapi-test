
import { Request, ResponseObject, ResponseToolkit } from "hapi";

export class DbModelController {

    public async auth(request: Request, h: ResponseToolkit): Promise<ResponseObject> {

        const config = request.pre["controllerConfig"];
        const repository = config.repositoryFactory.getRepository();

        let responseObject: ResponseObject;

        await repository
            .authenticate()
            .then(() => {
                responseObject = h.response({
                    msg: "Connected to database successfully",
                    error: null
                })
            })
            .catch((error: any) => {
                responseObject = h.response({
                    msg: "Unable to connect to the database",
                    error: error
                })
            });

        return responseObject;
    }
}
