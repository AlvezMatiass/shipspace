import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateScreen } from "../screens";

const Stack = createNativeStackNavigator();

function CreateNavigator() {
    return (
        <Stack.Navigator initialRouteName="Create">
            <Stack.Screen name="CreateScreen" component={CreateScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default CreateNavigator;