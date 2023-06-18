import React, { Component } from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import HelpdeskScreen from '../screens/HelpdeskScreen'
import ActivityScreen from '../screens/ActivityScreen'
import TabsNavigator, { TableStackParamList } from './TabsNavigator'
import {NavigatorScreenParams} from '@react-navigation/native'

export type RootStackParamList = {
    HomeScreen: undefined;
    ActivityScreen: undefined;
    HelpdeskScreen: undefined;
    ProfileScreen: undefined;
    TabStack: NavigatorScreenParams<TableStackParamList>;

}
const RootStack = createNativeStackNavigator<RootStackParamList>()

export class RootNavigator extends Component {
  render() {
    return (
      <RootStack.Navigator>
          <RootStack.Screen name='TabStack' component={TabsNavigator} options={{
          headerShown: false
                }}/>
          <RootStack.Screen name="HomeScreen" component={HomeScreen}/>
          <RootStack.Screen name="HelpdeskScreen" component={HelpdeskScreen} />
          <RootStack.Screen name="ActivityScreen" component={ActivityScreen} />
          <RootStack.Screen name="ProfileScreen" component={ProfileScreen} />
        </RootStack.Navigator>
    )
  }
}

export default RootNavigator