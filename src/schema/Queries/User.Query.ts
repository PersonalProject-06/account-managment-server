import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User.typeDefs";
import { Users } from "../../Entites/User.entity";
import { User } from "../../Interface/User.interface";
export const GET_ALL_USER_DATA = {
  type: new GraphQLList(UserType),
  resolve: async (): Promise<Users[]> => {
    return await Users.find();
  },
};
