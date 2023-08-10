import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Create } from "../screens";

const Stack = createNativeStackNavigator();

function CreateNavigator() {
    return (
        <Stack.Navigator initialRouteName="Create">
            <Stack.Screen name="Create" component={Create} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default CreateNavigator;