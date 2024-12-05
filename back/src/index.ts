import "reflect-metadata";
import server from "./server";
import { PORT } from "./config/envs"
import { AppDataSource } from "./config/dataSource";

AppDataSource.initialize()
    .then(() => { 
        console.log("Database connected")
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch((error) => console.log(error));



    
