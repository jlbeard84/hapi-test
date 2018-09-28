import { IAppMiddleware } from "../interfaces";
import { Config } from "../config";
import { Server, Request, ResponseToolkit } from "hapi";
import * as hapiAuthJwt2 from "hapi-auth-jwt2";

export class AuthorizationMiddleware implements IAppMiddleware {

    public static STRATEGY_NAME = "jwt";

    public async configure(server: Server): Promise<void> {
        
        await server.register({
            plugin: hapiAuthJwt2
        });

        const validationFunction = this.validateToken;

        server.auth.strategy(
            AuthorizationMiddleware.STRATEGY_NAME,
            AuthorizationMiddleware.STRATEGY_NAME,
            {
                key: Config.SecretKey,
                validate: validationFunction,
                verifyOptions: {
                    algoritms: [ Config.AuthAlgorithm ]
                }
            });

        server.auth.default(AuthorizationMiddleware.STRATEGY_NAME);
    }

    private async validateToken(decoded: any, request: Request, tk: ResponseToolkit): Promise<any> {
        // TODO: real user check here
        if (!decoded || !decoded.id || !decoded.username) {
            return { isValid: false };
        }

        return { isValid: true };
    }
}