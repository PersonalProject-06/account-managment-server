import { GraphQLString } from "graphql";
import { finUserWithEmail, saveUser, CheckUser, getUserData } from "./helpres";
import { Iuser, Imessage, IAuth } from "../../Interface/User.interface";
import { messageType } from "../TypeDefs/message.typedefs";
import session from "express-session";

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

export const LOGIN = {
  type: messageType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: async (
    parent: Iuser,
    args: IAuth,
    context: any
  ): Promise<Imessage> => {
    const response = await CheckUser(args);

    if (response) {
      const data = getUserData(args.email);
      context.req.session.User = data;
      return {
        success: true,
        message: "is authenticated",
        accessToken: null,
      };
    } else {
      return {
        success: false,
        message: "is not authenticated",
        accessToken: null,
      };
    }
  },
};
