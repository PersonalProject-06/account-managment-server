import { Entity,  Column   , PrimaryGeneratedColumn, BaseEntity} from  'typeorm'

@Entity ({name:"users"})
export class userEntity  extends BaseEntity {

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

