import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginView from "../views/auth/login/LoginView";
import RegisterView from "../views/auth/register/RegisterView";
import {NavigationContainer} from "@react-navigation/native";

export type RootStackParanList = {
    Login: undefined;
    Registro: undefined;

}

const Stack = createNativeStackNavigator<RootStackParanList>();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false, animation: "flip"
                }}>

                <Stack.Screen name={"Login"} component={LoginView}></Stack.Screen>

                <Stack.Screen name={"Registro"} component={RegisterView}
                              options={{
                                  headerShown: true,
                                  headerTitle: "Registrarme ahora",
                                  headerTitleAlign: "center",
                                  animation:"slide_from_bottom",
                              }}></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;