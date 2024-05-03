import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { Alert } from 'react-native';
import { useBooks, useBooksActions } from './BookContext'; 

interface BookEntryProps {}

const BookEntry: React.FC<BookEntryProps> = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [totalPages, setTotalPages] = useState('');
  const navigation = useNavigation();
  const { addBook } = useBooksActions(); 
  const { books } = useBooks(); 

  const handleStoreInfo = () => {
    if (!title || !author || !genre || !totalPages) {
      Alert.alert('Please fill in your book data correctly.');
      return;
    }
    const newBook = { title, author, genre, totalPages };
    addBook(newBook); 
    console.log('Books after storing:', books);

    setTitle('');
    setAuthor('');
    setGenre('');
    setTotalPages('');
  };

  const handleViewHistory = () => {
    navigation.navigate('BookHistory'); 
  };

  const handleLogout = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Store</Text>
      <Text style={styles.subTitle}>Enter your book data</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        value={author}
        onChangeText={setAuthor}
      />
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => setGenre(value)}
        items={[
          { label: 'Fantasy', value: 'Fantasy' },
          { label: 'Education', value: 'Education' },
          { label: 'Mystery', value: 'Mystery' },
          { label: 'Romance', value: 'Romance' },
          { label: 'Thriller', value: 'Thriller' },
          { label: 'History', value: 'History' },
          { label: 'Horror', value: 'Horror' },
          { label: 'Crime investigation', value: 'Crime investigation' },
          { label: 'Business', value: 'Business' },
          { label: 'Motivational', value: 'Motivational' },
          { label: 'Religion', value: 'Religion' },
        ]}
        placeholder={{
          label: 'Select Genre',
          value: null,
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Total pages"
        value={totalPages}
        onChangeText={setTotalPages}
        keyboardType="numeric"
      />

      <View style={styles.buttonContainer}>
        <Button title="Store book" onPress={handleStoreInfo} color="#fc7b54" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="View History" onPress={handleViewHistory} color="#fc7b54" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={handleLogout} color="#fc7b54" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#7478E6',
    paddingTop: 50,
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    color: '#75FA8D',
    backgroundColor: '#732BF5',
    paddingTop: 10,
    paddingRight: 55,
    paddingBottom: 10,
    paddingLeft: 55,
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#75FA8D',
    backgroundColor: '#732BF5',
    paddingTop: 10,
    paddingRight: 55,
    paddingBottom: 10,
    paddingLeft: 55,
  },
  input: {
    borderWidth: 3,
    borderColor: '#75FA8D',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '80%',
    marginTop: 20,
    fontSize: 20,
  },
  buttonContainer: {
    marginBottom: 20,
    marginTop: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 3,
    borderColor: '#75FA8D',
    borderRadius: 0,
    color: 'black',
    paddingRight: 30,
    marginBottom: 10,
    width: '80%',
    marginLeft: 53,
    marginTop: 10,
  },
});

export default BookEntry;