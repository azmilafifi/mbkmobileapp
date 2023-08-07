import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import {AuthControllerService} from "../../openapi/codegen";


interface LoginBottomSheetContentProps {
  onClose: () => void;
  onLoginSuccess: () => void;
}

const LoginBottomSheetContent: React.FC<LoginBottomSheetContentProps> = ({ onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here (e.g., API call)
    // For this example, let's assume login is successful
    AuthControllerService.authenticateUserUsingPost({loginRequest: {email: username, password}}).then((data)=> {
      onLoginSuccess();
      // Close the bottom sheet after successful login
      onClose();
      console.log(data.accessToken);
    }).catch((err)=> {
      console.log('Error: ' + err);
    })
  };

  return (
    <View style={styles.bottomSheetContent}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheetContent: {
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 57,
    borderWidth: 2,
    borderColor: '#EEEEEE',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#878787',
    backgroundColor: 'white',
  },
  loginButton: {
    backgroundColor: '#EEEEEE',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
  },
  loginButtonText: {
    color: '#878787',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LoginBottomSheetContent;
