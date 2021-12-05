import { GraphQLID, GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User.typeDefs";
import { userEntity } from "../../Entites/User.entity";
import { Iuser, Iid } from "../../Interface/User.interface";

import { getConnection } from "typeorm";
export const GET_ALL_USER_DATA = {
  type: new GraphQLList(UserType),
  args: { id: { type: GraphQLID } },

  resolve: async (args: Iid):Promise<any> => {
    const user = await getConnection()
      .getRepository(userEntity)
      .createQueryBuilder("user")
      .where("user.id = :id", { id: args.id })
      .getOne();
      return user
  },
};
