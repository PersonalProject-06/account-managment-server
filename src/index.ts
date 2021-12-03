import expres from "express";

import {graphqlHTTP} from "express-graphql";

import cors from "cors";

import dotenv from "dotenv";
import express from "express";

import { schema } from "./schema/index" 

import {Connection} from "./dataBase/dataBase"
dotenv.config();

const main = async () => {
   await Connection
  const app = express();
  app.use(cors());
  app.use(

    `${process.env.URL}`,
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(process.env.PORT, () => {
    console.log("THE SERVER IS RUNNIG");
  });
};

main().catch((err) => {
  console.log(err);
});
