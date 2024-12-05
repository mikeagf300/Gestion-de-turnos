import {
    Entity,
    PrimaryGeneratedColumn, 
    Column,
    OneToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import Credential from './Credential';
import Appoinment from './Appoinment';


@Entity({
    name: 'users'
})
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    birthdate: Date;

    @Column()
    nDni: number;

    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential;

    @OneToMany(() => Appoinment, (appoinment) => appoinment.user)
    appoinments: Appoinment[]; 

}

export default User;