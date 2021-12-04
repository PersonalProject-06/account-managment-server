"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const typeorm_1 = require("typeorm");
const User_entity_1 = require("../Entites/User.entity");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { DATABASE, USERNAME, PASSWORD } = process.env;
exports.Connection = (0, typeorm_1.createConnection)({
    type: "postgres",
    database: DATABASE,
    host: "localhost",
    username: "postgres",
    password: PASSWORD,
    logging: true,
    synchronize: false,
    entities: [User_entity_1.Users]
});
