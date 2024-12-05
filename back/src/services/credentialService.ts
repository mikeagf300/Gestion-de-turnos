// services/credentialService.ts
import { credentialModel } from '../config/dataSource';
import ICredentialDto from '../dto/ICredentialDto';
import Credential from '../entities/Credential';
import ICredential from '../interfaces/ICredentials';


export const createCredential = async (credentialDto: ICredentialDto) => {
  const newCredential: Credential = await credentialModel.create(credentialDto);
  await credentialModel.save(newCredential);
  return newCredential;
  };


export const validateCredential = async (credentialDto: ICredentialDto) => {
  const {username,password} = credentialDto
  const foundCredential: Credential | undefined = await credentialModel.findOneBy({username: username});

  if (!foundCredential) {
    throw Error ("Credenciales Incorrectas")
  } else if (foundCredential.username !== username) {
    throw Error ("Usuario Incorrecto")
  } else if (foundCredential && foundCredential.password !== password) {
    throw Error ("Contraseña Incorrecta")
  }
  else {
      return foundCredential
  }
  
  }