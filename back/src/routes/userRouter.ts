import { Router } from "express";
import { getAllUsers, getUserById, login, register } from "../controllers/userController";

const userRouter: Router = Router();

//GET /users => Obtener el listado de todos los usuarios 
userRouter.get("/", getAllUsers);

//GET /users/:id => Obtener un usuario por su ID
userRouter.get("/:id", getUserById);

//POST /users/register => Registro de nuevo usuario 
userRouter.post("/register", register);

//POST /users/login => Login de usuario a la aplicacion 
userRouter.post("/login", login);

export default userRouter;