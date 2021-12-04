import {createConnection} from "typeorm"
import { Users} from "../Entites/User.entity"
import dotenv from "dotenv"
dotenv.config()
const  {DATABASE, USERNAME, PASSWORD} =process.env

export const Connection = createConnection({
    type:"postgres",
    database: process.env.DATABASE,
    host:process.env.HOST,
    username:process.env.USERNAME,
    password:process.env.PASSWORD,
    logging:true,
    ssl:true,
    synchronize:false,
    entities:[Users]
})