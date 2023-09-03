import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import MenuNavigator from "./menu";
import CreateNavigator from "./create";
import ProfileNavigator from "./profile";
import { COLORS } from "../themes";

const BottomTab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <BottomTab.Navigator 
        initialRouteName="MenuTab" 
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 56,
                paddingTop: 12,
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
                    <Ionicons name={focused ? "home" : "home-outline"} size={22} color={COLORS.textWhite} />
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
                    <Ionicons name={focused ? "create" : "create-outline"} size={22} color={COLORS.textWhite} />
                )
            }}
             />
            <BottomTab.Screen 
            name="ProfileTab" 
            component={ProfileNavigator}
            options={{
                tabBarLabel: '',
                tabBarIcon: ({focused}) => (
                    <Ionicons name={focused ? "person" : "person-outline"} size={22} color={COLORS.textWhite} />
                )
            }}
             />
        </BottomTab.Navigator>
    )
}

export default TabNavigator;