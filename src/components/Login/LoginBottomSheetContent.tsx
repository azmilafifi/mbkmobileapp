import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AuthControllerService} from "../../openapi/codegen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setLoggedIn, setToken} from '../../slice/authSlice';
import {useAppDispatch} from "../../hooks";

interface LoginBottomSheetContentProps {
  onClose: () => void;
  onLoginSuccess: () => void;
}

const text = 'Feel the new experience to access every government services'

const LoginBottomSheetContent: React.FC<LoginBottomSheetContentProps> = ({ onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useAppDispatch()

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

        // save token in asyncstorage
        const accessToken = data.accessToken;

        dispatch(setToken(accessToken));
        dispatch(setLoggedIn(true));
        
        AsyncStorage.setItem('accessToken', accessToken)

        onLoginSuccess();
        
        // Close the bottom sheet after successful login
        onClose();
        console.log(data.accessToken);
        
      })
      .catch((err) => {
        console.log('Error: ' + err);
        setError('Login failed. Please try again.');
      });
    // onLoginSuccess();
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.bottomSheetContent}>

      <Text style= {styles.loginText}>Log in</Text>
      <Text style= {styles.detail}>{text}</Text>
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
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      <View style={styles.errorContainer}>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheetContent: {
    paddingHorizontal:20,
    marginTop:50
  },
  loginText: {
    fontWeight: '600',
    fontSize: 25,
    
  },
  detail: {
    color: "#878787",
    fontWeight: '400',
    fontSize: 15,
    marginTop: 10,
    marginBottom:10,
  },
  input: {
    width: '100%',
    height: 57,
    borderWidth: 2,
    borderColor: '#EEEEEE',
    borderRadius: 10,
    marginTop: 15,
    paddingHorizontal: 10,
    color: '#878787',
    backgroundColor: 'white',
    marginBottom:5,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
  forgotPasswordText: {
    fontWeight: '500',
    fontSize: 12,
    color: "#878787",
    textAlign:'right'
  },
  loginButton: {
    backgroundColor: '#EEEEEE',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    height: 57,
    justifyContent:'center',
  },
  loginButtonText: {
    color: '#878787',
    fontSize: 15,
    fontWeight:'500',
    textAlign: 'center',
  },
  errorContainer: {
    minHeight: 20,
    marginBottom: 15,
    width: '100%',
  },
});

export default LoginBottomSheetContent;
