import {GraphQLString} from "graphql"
import { UserType } from "../TypeDefs/User.typeDefs"
import { Users} from "../../Entites/User.entity"
 import { User} from "../../Interface/User.interface"
export const CREATE_USER ={

    type : UserType,
    args : {
        name : {type : GraphQLString},
        email : {type :GraphQLString},
        password : {type :GraphQLString}
    },
    resolve :async (parent:any , args:User):Promise<User> =>{
        console.log(args ,'daz')
        Users.insert(args)
        return args
     }


}