import {createConnection} from "typeorm"
import { Users} from "../Entites/User.entity"
import dotenv from "dotenv"
dotenv.config()
const  {DATABASE, USERNAME, PASSWORD} =process.env
console.log(process.env.DATABASE,process.env.HOST ,process.env.USERNAME,process.env.PASSWORD )
export const Connection = createConnection({
    type:"postgres",
    database: process.env.DATABASE,
    host:process.env.HOST,
    username:process.env.USER,
    password:process.env.PASSWORD,
    logging:true,
    
    synchronize:false,
    entities:[Users]
})