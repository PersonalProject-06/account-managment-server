import { createConnection } from "typeorm";
import { userEntity } from "../Entites/User.entity";
import dotenv from "dotenv";
dotenv.config();

export const Connection = createConnection({
  type: "postgres",
 // url: process.env.DATABASE_URL,
  //ssl: {
  //  rejectUnauthorized: false,
 // },
  username: "postgres",
  password: "Hovcu3378#@",
  synchronize: true,

  entities: [userEntity],
});
