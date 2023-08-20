import RootNavigator from "../../../navigators/RootNavigator";
import LoginScreen from "../../screens/Login/LoginScreen";
import React from "react";
import {useAppSelector} from "../../hooks";

export function MainComponent() {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  return <>
    {isLoggedIn ? (
      <RootNavigator/>
    ) : (
      <LoginScreen/>
    )}
  </>;
}