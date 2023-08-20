import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider, useSelector} from 'react-redux';
import CheckLogIn from './src/components/Shared/CheckLogIn';
import {MainComponent} from "./src/components/Home/MainComponent";
import {store} from "./src/store/store";

export default function App() {
  // Create a client
  const queryClient = new QueryClient();

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
      <CheckLogIn/>
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={theme}>
          <View style={styles.container}>
            <StatusBar style='dark'/>
            <NavigationContainer>
              <MainComponent/>
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