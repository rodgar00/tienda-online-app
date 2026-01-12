import {useState} from "react";

const LoginViewModel = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const iniciarSesion = () => {
        alert(`Email: ${email}, Contraseña: ${password}`)
    }

    return{
        email,
        password,
        setEmail,
        setPassword,
        iniciarSesion
    }
}
export default LoginViewModel;