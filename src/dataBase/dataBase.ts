import {createConnection} from "typeorm"
import { ALLUser} from "../Entites/User.entity"
import dotenv from "dotenv"
dotenv.config()

export const Connection = createConnection({
   
    type: 'postgres',
    url: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
      },
    synchronize:false,
    entities:[ALLUser]
})