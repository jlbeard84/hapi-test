import { Server } from "hapi";

export interface IAppMiddleware {
    configure(server: Server): Promise<void>;
}