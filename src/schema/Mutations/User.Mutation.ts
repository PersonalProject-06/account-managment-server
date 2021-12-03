import {GraphQLString} from "graphql"
import { UserType } from "../TypeDefs/User.typeDefs"
import { Users} from "../../Entites/User.entity"
 import { User} from "../../Interface/User.interface"
export const SAVE_USER ={

    type : UserType,
    args : {
        name : {type : GraphQLString},
        photo : {type :GraphQLString},
        password : {type :GraphQLString}
    },
    resolve :async (parent:any , args:User):Promise<void> =>{
        Users.insert(args)

    }


}