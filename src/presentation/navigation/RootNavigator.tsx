import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RegisterView from "../views/auth/register/RegisterView";
import LoginView from "../views/auth/login/LoginView";
import {NavigationContainer} from "@react-navigation/native";

const rootNavigator = createNativeStackNavigator()

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <rootNavigator.Navigator>
                <rootNavigator.Screen name={"Login"} component={LoginView}></rootNavigator.Screen>
                <rootNavigator.Screen name={"Register"} component={RegisterView}></rootNavigator.Screen>
            </rootNavigator.Navigator>
        </NavigationContainer>
    )
}