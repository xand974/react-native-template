import React, {useContext} from 'react';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import {Stack} from '.';
import {AuthContext} from '../../contexts/AuthContext';

const RootStacks = () => {
  const {isLoggedIn} = useContext(AuthContext);
  const screenOptions = {
    headerShown: false,
  } as NativeStackNavigationOptions;

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={isLoggedIn ? 'HomeScreen' : 'RegisterScreen'}>
      {isLoggedIn ? <>{HomeStack()}</> : <>{AuthStack()}</>}
    </Stack.Navigator>
  );
};

export default RootStacks;
