// App.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Header  from './components/Header';
import BookForm from './components/BookForm';
import BookItem from './components/BookItem';

const App = () => {
  const [books, setBooks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const renderItem = ({ item }) => (
    <BookItem book={item} removeBook={removeBook} />
  );
  return (
    <View style={styles.container}>
      <Header />
      <BookForm addBook={addBook} />
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
});
export default App;
