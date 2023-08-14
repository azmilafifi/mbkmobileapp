import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import BackButton from '../../components/Shared/BackButton';
import { AuthControllerService } from "../../openapi/codegen";

interface SignUpScreenProps {
  onSignUpSuccess: () => void;
  onClose: () => void;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ onSignUpSuccess, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setmobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignUp = () => {
    const newErrors = {
      fullName: fullName === '' ? 'Full Name is required.' : '',
      email: email === '' ? 'Email is required.' : !emailIsValid(email) ? 'Please enter a valid email address.' : '',
      mobileNumber: mobileNumber === '' ? 'Phone Number is required.' : '',
      password: password === '' ? 'Password is required.' : password.length < 8 ? 'Password must be at least 8 characters long.' : '',
      confirmPassword: confirmPassword === '' ? 'Confirm Password is required.' : password !== confirmPassword ? 'Passwords do not match.' : '',
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    // Implement your sign-up logic here (e.g., API call)
    // For this example, let's assume sign-up is successful
    setErrors({
      fullName: '',
      email: '',
      mobileNumber: '',
      password: '',
      confirmPassword: '',
    });

    AuthControllerService.registerUserUsingPost({ signUpRequest: { email: email, fullName, mobileNumber, password }})
      .then((data) => {
        onSignUpSuccess();
        // Close the bottom sheet after successful login
        onClose();
        console.log(data.accessToken);
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
    
  };

  const emailIsValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{errors.fullName}</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <Text style={styles.errorText}>{errors.email}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.errorText}>{errors.mobileNumber}</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={mobileNumber}
        onChangeText={setmobileNumber}
      />
      <Text style={styles.errorText}>{errors.password}</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.errorText}>{errors.confirmPassword}</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  closeButtonText: {
    color: 'gray',
    fontSize: 16,
  },
  input: {
    width: '100%',
    height: 57,
    borderWidth: 2,
    borderColor: '#EEEEEE',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  signUpButton: {
    backgroundColor: '#EEEEEE',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    height: 57,
    width: "100%",
    justifyContent: 'center',
  },
  signUpButtonText: {
    color: '#878787',
    fontSize: 18,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
});

export default SignUpScreen;
