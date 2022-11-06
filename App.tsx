import Navigations from './src/navigations/Navigations';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthContextProvider} from './src/contexts/AuthContext';
import {StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <AuthContextProvider>
          <Navigations />
        </AuthContextProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
