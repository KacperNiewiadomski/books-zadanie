import React from 'react';
import { View ,Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>BOOKS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
export default Header;