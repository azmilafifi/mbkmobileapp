// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SamanScreen from '../screens/SamanScreen';
// import Perlesenan from '../screens/Perlesenan';
// import FloatingMenu from './FloatingMenu';
// import HomeScreen from '../screens/HomeScreen';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// export type FloatingStackParamList = {
//   Home: undefined;
//   Saman: undefined;
//   Perlesenan: undefined;
// };

// type FloatingMenuScreenProps = {
//   navigation: NativeStackNavigationProp<FloatingStackParamList>;
// };

// const Stack = createNativeStackNavigator<FloatingStackParamList>();

// const FloatingMenuNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           headerTitle: 'Home',
//         }}
//       />
//       <Stack.Screen
//         name="Saman"
//         component={SamanScreen}
//         options={{
//           headerTitle: 'Saman',
//         }}
//       />
//       <Stack.Screen
//         name="Perlesenan"
//         component={Perlesenan}
//         options={{
//           headerTitle: 'Perlesenan',
//         }}
//       />
//       <Stack.Screen
//         name="FloatingMenu"
//         options={{
//           headerShown: false,
//         }}
//       >
//         {({ navigation }: FloatingMenuScreenProps) => (
//           <FloatingMenu navigation={navigation} />
//         )}
//       </Stack.Screen>
//     </Stack.Navigator>
//   );
// };

// export default FloatingMenuNavigator;
