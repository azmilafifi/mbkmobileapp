import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});