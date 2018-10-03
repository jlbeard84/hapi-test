import { Request, ResponseObject, ResponseToolkit } from "hapi";
import { hashSync, compareSync } from "bcrypt-nodejs";
import { badRequest, unauthorized } from "boom";
import { sign } from "jsonwebtoken"
import { UserModel } from "../models";
import { Config, ControllerConfig } from "../config";
import { BaseController } from "./base.controller";

export class TokenController extends BaseController {

    public static INVALID_UNPW_MESSAGE = "Invalid username/password";

    constructor(controllerConfig: ControllerConfig) {
        super(controllerConfig);
    }

    public post(request: Request, h: ResponseToolkit): ResponseObject {

        const validUsername = "testuser";
        const validPassword = "Pass1234!";
    
        const hashedValidPassword = hashSync(validPassword);

        const username: string = request.payload["username"];
        const password: string = request.payload["password"];

        if (!username || !password) {
            throw badRequest(TokenController.INVALID_UNPW_MESSAGE);
        }

        // TODO: check against some sort of auth store
        if (username !== validUsername || !compareSync(password, hashedValidPassword)) {
            throw unauthorized(TokenController.INVALID_UNPW_MESSAGE);
        }

        const userModel = new UserModel();
        userModel.id = 1;
        userModel.username = username;

        const config = new Config();

        const jwt: string = sign(
            JSON.parse(JSON.stringify(userModel)),
            config.SecretKey,
            {
                algorithm: config.AuthAlgorithm,
                expiresIn: config.TokenExpirationTime
            }
        );

        return h.response(jwt);
    }
}
