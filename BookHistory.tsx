import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useBooks, useBooksActions } from './BookContext';

const BookHistory: React.FC = () => {
  const navigation = useNavigation();
  const { books } = useBooks();
  const { removeBook } = useBooksActions(); 
  const reversedBooks = [...books].reverse();
  const [deletingBookIndex, setDeletingBookIndex] = useState<number | null>(null);

  const handleDeleteBook = (bookId: string) => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this book?',
      [
        { text: 'No', onPress: () => {}, style: 'cancel' },
        { 
          text: 'Yes', 
          onPress: () => {
            removeBook(bookId);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Store</Text>
      <Text style={styles.subTitle}>History</Text>
      <Text style={styles.heading}>Recently read books</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.booksContainer}>
          {reversedBooks.map((book: any, index: number) => (
            <View key={index} style={styles.bookItem}>
              <View style={styles.bookInfo}>
                <Text style={styles.bookText}>#{reversedBooks.length - index}</Text>
                <Text style={styles.bookText}>Title: {book.title}</Text>
                <Text style={styles.bookText}>Author: {book.author}</Text>
                <Text style={styles.bookText}>Genre: {book.genre}</Text>
                <Text style={styles.bookText}>Total Pages: {book.totalPages}</Text>
              </View>
              <View style={styles.deleteButton}>
                <Button title="x" onPress={() => handleDeleteBook(book.id)} color='#75FA8D' />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Return Home" onPress={() => navigation.navigate('HomePage')} color="#fc7b54" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Genre History" onPress={() => navigation.navigate('Genre')} color="#fc7b54" />
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
    paddingRight: 76,
    paddingBottom: 10,
    paddingLeft: 76,
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#75FA8D',
    backgroundColor: '#732BF5',
    paddingTop: 10,
    paddingRight: 140,
    paddingBottom: 10,
    paddingLeft: 140,
  },
  heading: {
    fontSize: 20,
    color: '#75FA8D',
    marginBottom: 20,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  booksContainer: {
    width: '80%',
    alignItems: 'center',
  },
  bookItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 3,
    borderColor: '#75FA8D',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#732BF5',
    color: '#75FA8D',
  },
  bookInfo: {
    flex: 1,
  },
  bookText: {
    color: '#75FA8D',
    fontSize: 20,
  },
  deleteButton: {
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20, 
  },
});

export default BookHistory;