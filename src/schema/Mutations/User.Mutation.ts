import { GraphQLString } from "graphql";
import { finUserWithEmail, saveUser } from "./helpres";
import { Iuser, Imessage } from "../../Interface/User.interface";
import { messageType } from "../TypeDefs/message.typedefs";

export const CREATE_USER = {
  type: messageType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: async (parent: any, args: Iuser): Promise<Imessage | undefined> => {
    try {
      const { email } = args;
      const bool = await finUserWithEmail(email);
      if (!bool) {
        const token = await saveUser(args);
        return {
          success: true,
          message: "user save it ",
          accessToken: token,
        };
      } else {
        return {
          success: false,
          message: "User already exists",
          accessToken: null,
        };
      }
    } catch (err) {
      console.log(err);
    }
  },
};
