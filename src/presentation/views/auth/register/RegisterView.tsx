import React from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './RegisterStyle';
import RegisterViewModel from './RegisterViewModel';

const RegisterView = () => {

    const {
        email,
        password,
        confirmPassword,
        address,
        phone,
        setEmail,
        setPassword,
        setConfirmPassword,
        setAddress,
        setPhone,
        register,
    } = RegisterViewModel();

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={styles.titulo}>Registrar Usuario</Text>

                <Text style={styles.label}>Correo electrónico</Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType="email-address"
                    placeholder="...@example.com"
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="*****"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <Text style={styles.label}>Escribe la contraseña de nuevo</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="*****"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <Text style={styles.label}>Dirección</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Calle, número, ciudad"
                    value={address}
                    onChangeText={setAddress}
                />

                <Text style={styles.label}>Número telefónico</Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType="phone-pad"
                    placeholder="+34"
                    value={phone}
                    onChangeText={setPhone}
                />

                <TouchableOpacity style={styles.buttonSubmit} onPress={register}>
                    <Text style={{ textAlign: 'center', color: '#fff' }}>
                        Registrarse
                    </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
};

export default RegisterView;
