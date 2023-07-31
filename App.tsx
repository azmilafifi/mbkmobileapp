import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';
import LoginScreen from './src/screens/Login/LoginScreen';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Function to handle sign-up link press
  const handleSignUpPress = () => {
    // You can navigate to the sign-up screen here
    // For this example, let's just show the SignUpScreen
    setIsLoggedIn(false);
  };


  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
    <StatusBar style='dark' />
    <NavigationContainer>
      {isLoggedIn ? (
        <RootNavigator />
      ) : (
        <LoginScreen onLoginSuccess={handleLoginSuccess} onSignUpPress={handleSignUpPress} />
      )}
    </NavigationContainer>
      </View>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
