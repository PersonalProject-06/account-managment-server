import {createConnection} from "typeorm"
import { Users} from "../Entites/User.entity"
import dotenv from "dotenv"
dotenv.config()

export const Connection = createConnection({
   
    type: 'postgres',
    url: process.env.DATABASE_URL,
    extra: {
        ssl: true
      },
    synchronize:false,
    entities:[Users]
})