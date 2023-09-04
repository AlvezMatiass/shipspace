import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import MenuNavigator from "./menu";
import CreateNavigator from "./create";
import ProfileNavigator from "./profile";
import { COLORS } from "../themes";
import { useWindowDimensions } from "react-native";

const BottomTab = createBottomTabNavigator()

const TabNavigator = () => {

    const {width} = useWindowDimensions()

    return (
        <BottomTab.Navigator 
        initialRouteName="MenuTab" 
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: width > 660 ? 70 : 56,
                paddingTop: width > 660 ? 2 : 10,
                backgroundColor: COLORS.secundaryBackground,
                borderTopWidth: .4
            }
        }}
        >
            <BottomTab.Screen 
            name="MenuTab" 
            component={MenuNavigator}
            options={{
                tabBarLabel: '',
                tabBarIcon: ({focused}) => (
                    <Ionicons name={focused ? "home" : "home-outline"} size={width > 660 ? 28 : 22} color={COLORS.textWhite} />
                )
            }} 
            />
            <BottomTab.Screen 
            name='Create' 
            component={CreateNavigator}
            options={{
                animation: 'slide_from_right',
                tabBarLabel: '',
                tabBarIcon: ({focused}) => (
                    <Ionicons name={focused ? "create" : "create-outline"} size={width > 660 ? 28 : 22} color={COLORS.textWhite} />
                )
            }}
             />
            <BottomTab.Screen 
            name="ProfileTab" 
            component={ProfileNavigator}
            options={{
                tabBarLabel: '',
                tabBarIcon: ({focused}) => (
                    <Ionicons name={focused ? "person" : "person-outline"} size={width > 660 ? 28 : 22} color={COLORS.textWhite} />
                )
            }}
             />
        </BottomTab.Navigator>
    )
}

export default TabNavigator;