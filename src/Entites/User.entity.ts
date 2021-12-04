import { Entity,  Column  , BaseEntity , PrimaryGeneratedColumn} from  'typeorm'

@Entity ({name:"USER"})
export class ALLUser extends BaseEntity {

 @PrimaryGeneratedColumn()
    id! : number 
 @Column()
    name! : string 
 @Column()
    email! : string 
 @Column()
    password!:string 
}

