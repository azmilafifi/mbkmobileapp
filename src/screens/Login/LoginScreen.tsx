// File: LoginScreen.tsx

import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import RBSheet, { RBSheetProps } from 'react-native-raw-bottom-sheet';
import LoginBottomSheetContent from '../../components/Login/LoginBottomSheetContent';

interface LoginScreenProps {
  onLoginSuccess: () => void;
  onSignUpPress: () => void;
}

const PIC_url = 'https://images.unsplash.com/photo-1584870831686-c2637ecbc95d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';

const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess, onSignUpPress }) => {
  const bottomSheetRef = useRef<RBSheet>(null);

  const handleLogin = () => {
    // Open the bottom sheet when the "Login" button is pressed
    bottomSheetRef.current?.open();
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: PIC_url }} style={styles.backgroundImage}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpButton} onPress={onSignUpPress}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <RBSheet
        ref={bottomSheetRef}
        height={300}
        duration={250}
        closeOnDragDown={true}
        closeOnPressMask={true}
      >
        <LoginBottomSheetContent
          onLoginSuccess={onLoginSuccess}
          onClose={() => bottomSheetRef.current?.close()}
        />
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position:'absolute',
    alignItems: 'center',
    paddingHorizontal: 20,
    bottom: 100,
  },
  loginButton: {
    backgroundColor: '#243FD6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: 316,
  },
  signUpButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    width:316,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
  signupButtonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
  signUpLink: {
    fontSize: 16,
    color: 'black',
  },
});

export default LoginScreen;
