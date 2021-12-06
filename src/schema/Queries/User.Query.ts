import { GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User.typeDefs";
import { userEntity } from "../../Entites/User.entity";
import { Iuser, Iid } from "../../Interface/User.interface";

import { getConnection } from "typeorm";
export const GET_ALL_USER_DATA = {
  type:UserType,
  args: { 
    name: { type: GraphQLString } 
  },

  resolve: async (parent:Iuser , args: Iid):Promise<any> => {
   
    const user = await getConnection()
      .getRepository(userEntity)
      .createQueryBuilder("user")
      .select(["user.accessToken"])
      .where("user.name = :name", { name: args.name })
      .getOne();
       return user
  },
};
