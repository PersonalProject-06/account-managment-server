import { Entity,  Column   , PrimaryGeneratedColumn, BaseEntity} from  'typeorm'

@Entity ()
export class userEntity  {

 @PrimaryGeneratedColumn()
    id! : number 
 @Column({nullable: false})
    name! : string 
 @Column({nullable: false})
    email! : string 
 @Column({nullable: false})
    password!:string 
 @Column({nullable: false})
   accessToken!:string    

 @Column({type: "timestamp", default:()=> "CURRENT_TIMESTAMP"})
   createdAts!: Date  
}

