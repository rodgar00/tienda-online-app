//export function LoginView() {
//
//}

import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {styles} from './LoginStyle'
import viewModel from './LoginViewModel';


const LoginView = (() => {

    const {email, password, setEmail, iniciarSesion, setPassword} = viewModel();

    return (
        <View>
            <Text style={styles.titulo}>
                Iniciar Sesión
            </Text>

            <Text style={styles.label}>
                Correo Electrónico
            </Text>
            <TextInput style={styles.textInput}
                       autoComplete={"email"}
                       autoFocus={true}
                       placeholder={"...@example.com"}
                       onChangeText={(text: string) => setEmail(text)}>
            </TextInput>
            <Text style={styles.label}>
                Contraseña
            </Text>
            <TextInput style={styles.textInput}
                       autoComplete={"password"}
                       placeholder={"*****"}
                       keyboardType={"default"}
                       secureTextEntry={true}
                       onChangeText={(text: string) => setPassword(text)}
            >

            </TextInput>

            <TouchableOpacity style={styles.buttonSubmit} onPress={() => {(iniciarSesion())
            }}>
                <Text style={{textAlign: "center"}}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
})

export default LoginView;

