import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile, CreateUserData } from "../screens";

const Stack = createNativeStackNavigator();

function ProfileNavigator() {
    return (
        <Stack.Navigator initialRouteName="Profile" screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="CreateUserData" component={ CreateUserData } />
        </Stack.Navigator>
    )
}

export default ProfileNavigator;