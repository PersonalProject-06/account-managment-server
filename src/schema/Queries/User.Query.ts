import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User.typeDefs";
import { USER } from "../../Entites/User.entity";
import { Iuser } from "../../Interface/User.interface";
export const GET_ALL_USER_DATA = {
  type: new GraphQLList(UserType),
  resolve: async () => {
    
    return await USER.find();
  },
};
