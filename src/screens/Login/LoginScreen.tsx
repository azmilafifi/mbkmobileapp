import React, {useRef} from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import LoginBottomSheetContent from '../../components/Login/LoginBottomSheetContent';
import SignUpScreen from '../Signup/SingUpScreen';
import {setLoggedIn} from "../../slice/authSlice";
import {useAppDispatch} from "../../hooks";

interface LoginScreenProps {
}

const PIC_url = 'https://images.unsplash.com/photo-1584870831686-c2637ecbc95d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';
const windowHeight = 0.9 * (Dimensions.get('window').height);

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const bottomSheetRef = useRef<RBSheet>(null);
  const bottomSheetSignUp = useRef<RBSheet>(null);
  const handleLogin = () => {
    // Open the bottom sheet when the "Login" button is pressed
    bottomSheetRef.current?.open();
  };
  const dispatch = useAppDispatch();

  const handleSignUp = () => {
    bottomSheetSignUp.current?.open();
  }

  const handleLoginSuccess = () => {
    dispatch(setLoggedIn(true));
  }

  const onSignUpPress = () => {

  }

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: PIC_url }} style={styles.backgroundImage}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <RBSheet
        ref={bottomSheetRef}
        height={500}
        duration={250}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 40, // Add the desired border radius values
            borderTopRightRadius: 40,
          },
        }}
      >
        <LoginBottomSheetContent
          onLoginSuccess={handleLoginSuccess}
          onClose={() => bottomSheetRef.current?.close()}
        />
      </RBSheet>
      <RBSheet
        ref={bottomSheetSignUp}
        height={windowHeight}
        duration={250}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 40, // Add the desired border radius values
            borderTopRightRadius: 40,
          },
        }}
      >
        <SignUpScreen
          onSignUpSuccess={onSignUpPress}
          onClose={() => bottomSheetSignUp.current?.close()}
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
    borderRadius: 20,
    marginBottom: 15,
    justifyContent:'center',
    width: 316,
    height:72,
  },
  signUpButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 15,
    justifyContent:'center',
    width: 316,
    height:72,
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
  bottomSheet: {
    borderRadius: 20,
  },
});

export default LoginScreen;
