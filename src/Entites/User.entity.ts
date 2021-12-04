import { Entity,  Column  , BaseEntity , PrimaryGeneratedColumn} from  'typeorm'

@Entity ()
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

