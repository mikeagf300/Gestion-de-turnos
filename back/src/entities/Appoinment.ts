import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import User from "./User";

@Entity ({
    name: "appoinments"
}) 

class Appoinment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    time: string;

    @Column({
        default: 'active'
    })
    status: string;

    @Column({
        default: 'active'
    })
    description: string; 

    @ManyToOne(() => User, user => user.appoinments)
    user: User;
}

export default Appoinment;