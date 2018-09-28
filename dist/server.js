"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi_1 = require("hapi");
const server = new hapi_1.Server({
    port: 8000,
    host: "localhost"
});
server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
        console.log("request", request);
        console.log("h", h);
        return "Hello, World";
    }
});
const init = () => __awaiter(this, void 0, void 0, function* () {
    yield server.start();
    console.log(`Server running at: ${server.info.uri}`);
});
process.on("unhandledRejection", (error) => {
    console.log(error);
    process.exit(1);
});
init();
//# sourceMappingURL=server.js.map