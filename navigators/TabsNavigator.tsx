
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ActivityScreen from '../screens/ActivityScreen';
import HelpdeskScreen from '../screens/HelpdeskScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icons from "@expo/vector-icons/MaterialIcons";
import { AntDesign } from '@expo/vector-icons';



export type TableStackParamList = {
    Home: undefined;
    Activity: undefined;
    Helpdesk: undefined;
    Profile: undefined;
}

const TabStack = createBottomTabNavigator<TableStackParamList>()

const TabsNavigator = () => {
    return (
        <TabStack.Navigator screenOptions={{
            tabBarShowLabel: false,
        
        }}>
            <TabStack.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
                tabBarIcon(props) {
                    return <Icons name='home' {...props} size={31} />
                },
            }} />
            <TabStack.Screen name="Activity" component={ActivityScreen} options={{
                headerShown: false,
                tabBarIcon(props) {
                    return <Icons name='history' {...props} size={31} />
                },
            }} />
            <TabStack.Screen name="Helpdesk" component={HelpdeskScreen} options={{
                headerShown: false,
                tabBarIcon(props) {
                    return <AntDesign name='customerservice' {...props} size={31} />
                },
            }} />
            <TabStack.Screen name="Profile" component={ProfileScreen} options={{
                headerShown: false,
                tabBarIcon(props) {
                    return <Icons name='person' {...props} size={31} />
                },
            }} />
        </TabStack.Navigator>
    )
}

export default TabsNavigator