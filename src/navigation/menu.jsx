import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Menu } from "../screens";
import PublicationDetail from "../screens/publicationDetail";
import { Header } from "../components";
import { COLORS } from "../themes";
import { useEffect, useState } from "react";
import { fetchSession } from "../db";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

function MenuNavigator() {

    return (
        <Stack.Navigator initialRouteName="Menu" 
            screenOptions={{
                animation: 'slide_from_right',
                headerStyle: {
                    backgroundColor: COLORS.secundaryBackground,
                },
                headerTintColor: COLORS.textWhite
            }
            }>
            <Stack.Screen name="Menu" component={Menu} options={{
                header: () => <Header />
            }}/>
            <Stack.Screen name="PublicationDetail" component={PublicationDetail} options={{title: 'Publication'}}/>
        </Stack.Navigator>
    )
}

export default MenuNavigator;