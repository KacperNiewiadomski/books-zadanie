import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const FormField = ({ placeholder, value, onChangeText }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
  />
);

const BookForm = ({ addBook }) => {
  const [name, setName] = useState('');
  const [ISBN, setISBN] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleAddBook = () => {
    if (!name || !price) {
      alert('Name and price are required!');
      return;
    }

    const newBook = {
      id: Math.random().toString(),
      name,
      ISBN,
      description,
      price,
      category,
    };

    addBook(newBook);

    setName('');
    setISBN('');
    setDescription('');
    setPrice('');
    setCategory('');
  };

  return (
    <View style={styles.form}>
      <FormField
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <FormField
        placeholder="ISBN"
        value={ISBN}
        onChangeText={setISBN}
      />
      <FormField
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <FormField
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
      />
      <FormField
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Add" onPress={handleAddBook} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default BookForm;
