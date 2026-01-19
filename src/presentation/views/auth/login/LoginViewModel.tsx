import {useState} from "react";
import {LoginData} from "../../../../domain/entities/login-interface";


const LoginViewModel = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const iniciarSesion = ()=> {
        const  data: LoginData = {
            email:email,
            password: password
        }

        if (validate()){
            alert(`Email: ${email}, Contraseña: ${password}`)
        }
    }

    const validate = () => {
        if (!email.includes("@")) {
            alert("Correo electrónico no válido. hace falta un @.")
            return false;
        }
        if (password.length < 6) {
            alert("La contraseña debe de tener mín. 6 caracteres.")
            return false;
        }
    }


    return {
        email,
        password,
        setEmail,
        setPassword,
        iniciarSesion
    }

}

export default LoginViewModel;