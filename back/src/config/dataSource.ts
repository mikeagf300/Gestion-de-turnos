import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";
import User from "../entities/User";
import Credential from "../entities/Credential";
import Appoinment from "../entities/Appoinment";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST || "localhost",
    port: DB_PORT || 5432,
    username: DB_USERNAME || "postgres", 
    password: DB_PASSWORD || "140318", 
    database: DB_NAME || "test",
    synchronize: true,
    dropSchema: false, // cuando termine de configurar todo pasar a false
    logging: false, //Se puede sacar el registro de la consola cambiando este loggin a false
    entities: [User, Credential, Appoinment],
    subscribers: [],
    migrations: [],
})

export const userModel = AppDataSource.getRepository(User);
export const credentialModel = AppDataSource.getRepository(Credential);
export const appoinmentModel = AppDataSource.getRepository(Appoinment);