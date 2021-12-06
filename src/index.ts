import expres from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { schema } from "./schema/index";
import { Connection } from "./dataBase/dataBase";
import session from "express-session";
import cookie from "cookie-parser";
import bodyParser from "body-parser";
dotenv.config();

const main = async () => {
  await Connection;
  const app = express();
  app.use(
    cors({
      origin: process.env.ORIGIN,

      credentials: true,
    })
  );
  app.use(cookie());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    session({
      name: "UserID ",
      secret: `${process.env.SECRET}`,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        secure: true,
      },
    })
  );
  app.use(
    `${process.env.URL}`,
    bodyParser.json(),
    graphqlHTTP((req) => ({
      schema,
      graphiql: true,
      context: { req },
    }))
  );

  app.listen(process.env.PORT, () => {
    console.log("THE SERVER IS RUNNIG");
  });
};

main().catch((err) => {
  console.log(err);
});
