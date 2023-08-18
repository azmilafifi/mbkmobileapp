import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../src/screens/NavBar/HomeScreen'
import ProfileScreen from '../src/screens/NavBar/ProfileScreen'
import HelpdeskScreen from '../src/screens/NavBar/HelpdeskScreen'
import ActivityScreen from '../src/screens/NavBar/ActivityScreen'
import TabsNavigator, { TableStackParamList } from './TabsNavigator'
import { NavigatorScreenParams } from '@react-navigation/native'
import Perlesenan from '../src/screens/Perlesenan/Perlesenan'
import SamanScreen from '../src/screens/iClean/SamanScreen'
import PayScreen from '../src/screens/iClean/PayScreen'
import LesenNiagaFormScreen from '../src/screens/Perlesenan/LesenNiagaFormScreen'
import LesenPenjajaFormScreen from '../src/screens/Perlesenan/LesenPenjajaFormScreen'

export type RootStackParamList = {
  HomeScreen: undefined;
  ActivityScreen: undefined;
  HelpdeskScreen: undefined;
  ProfileScreen: undefined;
  Perlesenan: undefined;
  SamanScreen: undefined;
  PayScreen: undefined;
  LesenNiagaForm: undefined;
  LesenAnjingForm: undefined;
  LesenPenjajaForm: undefined;
  TabStack: NavigatorScreenParams<TableStackParamList>;
}
const RootStack = createNativeStackNavigator<RootStackParamList>()

export class RootNavigator extends Component {
  render() {
    return (
      <RootStack.Navigator>
        <RootStack.Screen name='TabStack' component={TabsNavigator} options={{
          headerShown: false
        }} />
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="HelpdeskScreen" component={HelpdeskScreen} />
        <RootStack.Screen name="ActivityScreen" component={ActivityScreen} />
        <RootStack.Screen name="ProfileScreen" component={ProfileScreen} />
        <RootStack.Screen name="SamanScreen" component={SamanScreen} options={{
          headerShown: false,
        }} />
        <RootStack.Screen name="Perlesenan" component={Perlesenan} options={{
          headerShown: false,
        }} />
        <RootStack.Screen name="PayScreen" component={PayScreen} options={{
          headerShown: false,
        }} />
        <RootStack.Screen name="LesenNiagaForm" component={LesenNiagaFormScreen} options={{
          headerShown: false,
        }} />
        <RootStack.Screen name="LesenPenjajaForm" component={LesenPenjajaFormScreen} options={{
          headerShown: false,
        }}/>
      </RootStack.Navigator>
    )
  }
}

export default RootNavigator