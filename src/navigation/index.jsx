import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./tabs";
import AuthNavigator from "./auth";
import { useSelector } from "react-redux";


function RootNavigator() {

    const user = useSelector((state) => state.auth.user)
    //{ user?.localId ? <TabNavigator /> : <AuthNavigator />}

    return (
        <NavigationContainer>
           { user?.localId ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}

export default RootNavigator;