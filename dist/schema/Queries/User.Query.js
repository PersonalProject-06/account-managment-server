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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_USER_DATA = void 0;
const graphql_1 = require("graphql");
const User_typeDefs_1 = require("../TypeDefs/User.typeDefs");
const User_entity_1 = require("../../Entites/User.entity");
exports.GET_ALL_USER_DATA = {
    type: new graphql_1.GraphQLList(User_typeDefs_1.UserType),
    resolve: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield User_entity_1.Users.find();
    }),
};
