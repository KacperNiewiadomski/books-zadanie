import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BookItem = ({ book, removeBook }) => {
  const { id, name, price } = book;

  const handleRemoveBook = () => {
    removeBook(id);
  };

  return (
    <View style={styles.item}>
      <Text>{`ID: ${id}, Name: ${name}, Price: ${price}`}</Text>
      <Button title="Usun" onPress={handleRemoveBook} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default BookItem;
