import React from 'react';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import RegisterScreen from '../../screens/auth/RegisterScreen';
import {Stack} from '.';

const AuthStack = () => {
  const screenOptions = {
    gestureEnabled: false,
  } as NativeStackNavigationOptions;
  return (
    <Stack.Group screenOptions={screenOptions}>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      {/* <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="GetStartedScreen" component={GetStarted} /> */}
    </Stack.Group>
  );
};

export default AuthStack;
