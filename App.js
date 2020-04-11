/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.background}>
        // Component goes here
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  background: {backgroundColor: '#4F5E69', flex: 1},
});

export default App;
