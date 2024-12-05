import {
    Entity,
    PrimaryGeneratedColumn, 
    Column
} from 'typeorm';

@Entity({
    name: 'credentials'
})

class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

}

export default Credential;