import {AuthRepository} from "../../domain/repositories/AuthRepository";
import {LoginData, UserInterface} from "../../domain/entities/login-interface";

class AuthRepositoryImpl implements AuthRepository {
    login(data: LoginData): Promise<UserInterface>{

    }
}