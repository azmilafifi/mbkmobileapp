import React, {useEffect} from 'react'
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {setLoggedIn, setToken} from "../../slice/authSlice";
import {useAppDispatch} from "../../hooks";

const CheckLogIn = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    // Check for token in AsyncStorage
    const checkToken = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        console.log(accessToken)
        if (accessToken) {
          // Check if the token is valid (you need to implement this logic)
          const isTokenValid = checkIfTokenIsValid(accessToken);

          if (isTokenValid) {
            dispatch(setToken(accessToken));
            dispatch(setLoggedIn(true));
          } else {
            dispatch(setLoggedIn(false));
          }
        } else {
          dispatch(setLoggedIn(false));
        }
      } catch (error) {
        console.log('Error checking token:', error);
      }
    };

    checkToken();
  }, []);

  function checkIfTokenIsValid(token:any) {
    const decodeJWT:any = jwt_decode(token)
    if (decodeJWT.exp * 1000 < Date.now()) {
      return false
    }
    return true;
  }

  return (
    <>
    </>
  )
}

export default CheckLogIn