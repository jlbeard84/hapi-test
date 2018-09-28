import { Request, ResponseObject, ResponseToolkit } from "hapi";
import { hashSync, compareSync } from "bcrypt-nodejs";
import { badRequest } from "boom";
import { sign } from "jsonwebtoken"
import { UserModel } from "models";
import { Config } from "config";

export class TokenController {

    public static INVALID_UNPW_MESSAGE = "Invalid username/password";

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
            throw badRequest(TokenController.INVALID_UNPW_MESSAGE);
        }

        const userModel = new UserModel();
        userModel.id = 1;
        userModel.username = username;

        const jwt: string = sign(
            JSON.parse(JSON.stringify(userModel)),
            Config.SecretKey,
            {
                algorithm: Config.AuthAlgorithm,
                expiresIn: Config.TokenExpirationTime
            }
        );

        return h.response(jwt);
    }
}