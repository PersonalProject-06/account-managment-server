import { GraphQLObjectType , GraphQLID , GraphQLString   } from 'graphql'

export const UserType = new GraphQLObjectType({
    name :"userlist" , 
    fields : ()=>({
        id : {type : GraphQLID},
        name : {type : GraphQLString},
        email : {type : GraphQLString},
        password : {type : GraphQLString}
    })


})