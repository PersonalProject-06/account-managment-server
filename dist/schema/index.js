"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const User_Query_1 = require("./Queries/User.Query");
const Query = new graphql_1.GraphQLObjectType({
    name: "Query",
    fields: {
        getUsers: User_Query_1.GET_ALL_USER_DATA
    }
});
const Mutations = new graphql_1.GraphQLObjectType({
    name: "Mutations",
    fields: {}
});
exports.schema = new graphql_1.GraphQLSchema({
    query: Query,
    mutation: Mutations
});
