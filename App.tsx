import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';
import {PaperProvider} from "react-native-paper";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export default function App() {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <View style={styles.container}>
          <StatusBar style='dark' />
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </View>
      </PaperProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});