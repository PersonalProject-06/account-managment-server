import { createQueryBuilder, getConnection } from "typeorm";
import { Iuser ,IAuth} from "../../Interface/User.interface";
import { userEntity } from "../../Entites/User.entity";
import bcryptjs from "bcryptjs";
var jwt = require("jsonwebtoken");
export const finUserWithEmail = async (
  email: string
): Promise<boolean | undefined> => {
  try {
    const checkExistance = await getConnection()
      .createQueryBuilder()
      .select("user")
      .from(userEntity, "user")
      .where("user.email = :email", { email })
      .getOne();

    if (checkExistance) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
  }
};
export const saveUser = async (user: Iuser) => {
  try {
    const { name, email, password } = user;
    const passHashed = await bcryptjs.hash(password, 10);
    const token = jwt.sign({ name }, process.env.SECRET_KEY);
    console.log(token);
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(userEntity)
      .values({
        name: name,
        email: email,
        password: passHashed,
        accessToken: token,
      })
      .execute();
    return token;
  } catch (e) {
    throw new Error();
  }
};



export const CheckUser = async (user: any): Promise<boolean | undefined> => {

  const getPassAndEmailFromDataBase =
  await getConnection() 
  .getRepository(userEntity)
  .createQueryBuilder("user")
  .select(["user.id","user.name","user.email","user.password"])
  .where("user.email = :email" , {email:user.email})
  .getOne()
      if(!getPassAndEmailFromDataBase){
        return false 
      }
      else if(getPassAndEmailFromDataBase){
          const bool = await bcryptjs.compare(user.password,getPassAndEmailFromDataBase.password)
          if(bool){
            return true 
          }else{
            return false 
          }
          }
          return false 
  
  }

  export const getUserData = async(email:string):Promise<any>=>{

      const data = await getConnection()
      .createQueryBuilder()
      .select("user")
      .from(userEntity, "user")
      .where("user.email = :email", { email })
      .getOne();
      return data 


  }