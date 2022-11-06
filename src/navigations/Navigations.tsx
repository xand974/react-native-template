import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStacks from './stacks/RootStacks';

const Navigations = () => {
  return (
    <NavigationContainer>
      <RootStacks />
    </NavigationContainer>
  );
};

export default Navigations;
