import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthLogin, AuthRegister, RegisterSuccess, SelectLoginRegister } from "../screens";

const Stack = createNativeStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator initialRouteName='Select' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Select" component={ SelectLoginRegister } />
            <Stack.Screen name="Login" component={ AuthLogin } />
            <Stack.Screen name="Register" component={AuthRegister} />
            <Stack.Screen name="RegisterSuccess" component={ RegisterSuccess } />
        </Stack.Navigator>
    )
}

export default AuthNavigator