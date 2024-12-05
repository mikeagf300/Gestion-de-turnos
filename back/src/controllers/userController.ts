import { Request, Response } from "express"
import IUser from "../interfaces/IUser";
import { createUserService, findUserByCredentialId, getUserByIdService, getUsersService } from "../services/userService";
import IUserDto from "../dto/userDto";
import { validateCredential } from "../services/credentialService";
import User from "../entities/User";



export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await getUsersService()
        res.status(200).json(users)
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const user = await getUserByIdService(Number(id))
        res.status(200).json(user)
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
};

export const register = async (req: Request, res: Response) => {
    try {
        const {name, email, birthdate, nDni, username, password}: IUserDto = req.body
    const newUser = createUserService({name, email, birthdate, nDni, username, password})
    res.status(201).json(newUser)
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
};

export const login = async (req: Request, res: Response) => {

    try {
        const {username, password} = req.body
    const credential = validateCredential({username, password});

    const user = await findUserByCredentialId((await credential).id)
    res.status(200).json({
        login: true,
        user
    })
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
};
