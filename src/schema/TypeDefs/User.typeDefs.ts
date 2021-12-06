import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
  name: "userlist",
  fields: () => ({
    accessToken: { type: GraphQLString },
  }),
});
