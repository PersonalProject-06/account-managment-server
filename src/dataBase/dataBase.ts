import {createConnection} from "typeorm"
import { Users} from "../Entites/User.entity"
import dotenv from "dotenv"
dotenv.config()
const  {DATABASE, USERNAME, PASSWORD} =process.env

export const Connection = createConnection({
    type:"mysql",
    database: DATABASE,
    host:"localhost",
    username: "root",
    password:PASSWORD,
    logging:true,
    synchronize:false,
    entities:[Users]
})
    