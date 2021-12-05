import {GraphQLString} from "graphql"
import { UserType } from "../TypeDefs/User.typeDefs"
import { userEntity} from "../../Entites/User.entity"
import { Iuser} from "../../Interface/User.interface"
import bcryptjs from "bcryptjs"
export const CREATE_USER ={

    type : UserType,
    args : {
        name : {type : GraphQLString},
        email : {type :GraphQLString},
        password : {type :GraphQLString}
    },
    resolve :async (parent:any , args:Iuser) =>{
        const {name , email , password} = args
        const passHashed = await bcryptjs.hash(password,10)
         userEntity.create({name, email,password:passHashed })
    
        return args
     }


}