import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { AuthControllerService } from "../../openapi/codegen";

interface LoginBottomSheetContentProps {
  onClose: () => void;
  onLoginSuccess: () => void;
}

const LoginBottomSheetContent: React.FC<LoginBottomSheetContentProps> = ({ onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Validation checks
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!isValidEmail(username)) {
      setError('Please enter a valid email address');
      return;
    }

    // Clear previous errors
    setError('');

    // API call for authentication
    AuthControllerService.authenticateUserUsingPost({ loginRequest: { email: username, password } })
      .then((data) => {
        onLoginSuccess();
        // Close the bottom sheet after successful login
        onClose();
        console.log(data.accessToken);
      })
      .catch((err) => {
        console.log('Error: ' + err);
        setError('Login failed. Please try again.');
      });
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.bottomSheetContent}>
      <TextInput
        style={[styles.input, error ? styles.inputError : null]} // Adjusted style condition
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={[styles.input, error ? styles.inputError : null]} // Adjusted style condition
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.errorContainer}>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
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
    paddingTop:50
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
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
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
  errorContainer: {
    minHeight: 20,
    marginBottom: 15,
    width: '100%',
  },
});

export default LoginBottomSheetContent;
