import { Entity,  Column   , PrimaryGeneratedColumn, BaseEntity} from  'typeorm'

@Entity ()
export class userEntity  {

 @PrimaryGeneratedColumn()
    id! : number 
 @Column()
    name! : string 
 @Column()
    email! : string 
 @Column()
    password!:string 

 @Column({type: "timestamp", default:()=> "CURRENT_TIMESTAMP"})
   createdAts!: Date  
}

