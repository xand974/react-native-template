import React from 'react';
import {Stack} from '.';
// import {TransitionPresets} from '@react-navigation/stack';
import HomeScreen from '../../screens/home/HomeScreen';

const HomeStack = () => {
  //   const modalOptions = {
  //     ...TransitionPresets.ModalSlideFromBottomIOS,
  //   };

  return (
    <Stack.Group>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {/* <Stack.Screen name="SingScreen" component={SingScreen} />
      <Stack.Screen name="LyricsScreen" component={LyricsScreen} />
      <Stack.Screen name="RecordScreen" component={RecordScreen} />
      <Stack.Screen name="EditorScreen" component={EditorScreen} />
      <Stack.Screen
        name="ShareScreen"
        options={modalOptions}
        component={ShareScreen}
      />
      <Stack.Screen name="RenderingScreen" component={RenderingScreen} />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen
        name="PlayScreen"
        options={modalOptions}
        component={PlayScreen}
      /> */}
    </Stack.Group>
  );
};

export default HomeStack;
