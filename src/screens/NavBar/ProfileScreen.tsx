import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useAppDispatch} from "../../hooks";
import {setLoggedIn, setToken} from "../../slice/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {

  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(setLoggedIn(false));
    dispatch(setToken(''));
    AsyncStorage.removeItem('accessToken').then();
  }

  const handleLogout = ()=> {
    AsyncStorage.setItem('accessToken', 'hello')
    console.log(AsyncStorage.getItem('accessToken'))
  }
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
        <Text style={styles.bio}>Passionate about coding and technology.</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;
