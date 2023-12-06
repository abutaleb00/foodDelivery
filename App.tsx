/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES} from './constants/themes';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.text1}>GAME ON</Text>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Let's Begin</Text>
        </TouchableOpacity> 
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  text1: {
    fontSize: SIZES.extaLarge,
    color: COLORS.green,
    fontWeight: 'bold',
  },
  button1:{
    backgroundColor: COLORS.btnPrimary,
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.medium,
    borderRadius: SIZES.min
  },
  buttonText:{
    color: COLORS.white,
    fontSize: SIZES.large
  }
});

export default App;