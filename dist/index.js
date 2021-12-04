"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_graphql_1 = require("express-graphql");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const index_1 = require("./schema/index");
const dataBase_1 = require("./dataBase/dataBase");
dotenv_1.default.config();
console.log(process.env.URL);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield dataBase_1.Connection;
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(`${process.env.URL}`, (0, express_graphql_1.graphqlHTTP)({
        schema: index_1.schema,
        graphiql: true,
    }));
    app.listen(process.env.PORT, () => {
        console.log("THE SERVER IS RUNNIG");
    });
});
main().catch((err) => {
    console.log(err);
});
