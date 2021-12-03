
import { GraphQLSchema , GraphQLObjectType } from "graphql";
import {GET_ALL_USER_DATA} from "./Queries/User.Query"

const Query = new GraphQLObjectType({
    name : "Query",
    fields : {
        getUsers :GET_ALL_USER_DATA
    }
})


const Mutations = new GraphQLObjectType({
    name : "Mutations",
    fields:{

    }
})


export  const schema = new GraphQLSchema({
    query : Query,
    mutation : Mutations
}) 