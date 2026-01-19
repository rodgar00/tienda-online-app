import {AuthRepositoryImpl} from "../../data/repositories/AuthRepository";
import {LoginData} from "../entities/login-interface";

const {login} = new AuthRepositoryImpl();

//Si es asincrona se pone await a la función que quieres que lo haga
export const loginUseCase = async (data: LoginData) => {
    return await login(data)
}