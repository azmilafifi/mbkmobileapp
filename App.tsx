import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';
import LoginScreen from './src/screens/Login/LoginScreen';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import CheckLogIn from './src/components/Shared/CheckLogIn';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

   // Create a client
  const queryClient = new QueryClient();

  useEffect(() => {
    // Check for token in AsyncStorage
    const checkToken = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        console.log(accessToken)
        if (accessToken) {
          // Check if the token is valid (you need to implement this logic)
          const isTokenValid = checkIfTokenIsValid(accessToken);

          if (isTokenValid) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.log('Error checking token:', error);
      }
    };

    checkToken();
  }, []);

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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function checkIfTokenIsValid(token:any) {
  const decodeJWT:any = jwt_decode(token)
  const currentdate = new Date().getTime() / 1000
  const second = new Date().getTimezoneOffset()
  if (decodeJWT.exp * 1000 < Date.now()) {
    return false
  }
  return true; 
}
