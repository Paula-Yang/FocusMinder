// Header.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>FocusMinder</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
