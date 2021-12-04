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
exports.SAVE_USER = void 0;
const graphql_1 = require("graphql");
const User_typeDefs_1 = require("../TypeDefs/User.typeDefs");
const User_entity_1 = require("../../Entites/User.entity");
exports.SAVE_USER = {
    type: User_typeDefs_1.UserType,
    args: {
        name: { type: graphql_1.GraphQLString },
        photo: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString }
    },
    resolve: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
        User_entity_1.Users.insert(args);
    })
};
