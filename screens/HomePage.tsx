import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Image } from 'react-native';
import { useBooks, useBooksActions } from '../BookContext'; 
import { useNavigation } from '@react-navigation/native';

const HomePage: React.FC = () => {
  const navigation = useNavigation();
  const { books } = useBooks(); 
  const { removeBook } = useBooksActions();
  const [totalPagesEverRead, setTotalPagesEverRead] = useState(0);
  const [averagePagesRead, setAveragePagesRead] = useState(0);
  const [lastBookRead, setLastBookRead] = useState<any>(null);

  useEffect(() => {
    const totalPages = books.reduce((total, book) => total + parseInt(book.totalPages), 0);
    setTotalPagesEverRead(totalPages);

    const average = books.length > 0 ? totalPages / books.length : 0;
    setAveragePagesRead(average);

    
    if (books.length > 0) {
      setLastBookRead(books[books.length - 1]);
    } else {
      setLastBookRead(null);
    }
  }, [books]);

  const handleDeleteBook = (bookId: string) => {
    Alert.alert(
      'Delete Book',
      'Are you sure you want to delete this book?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => {
            removeBook(bookId);
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Store</Text>
      <Text style={styles.subTitle}>Welcome back</Text>
      <Image source={require('../assets/home.jpg')} style={styles.image} />
      <Text style={styles.heading}>The last book you read is</Text>
      {lastBookRead && (
        <View style={styles.bookDetails}>
          <Text style={styles.bookDetailText}>Title: {lastBookRead.title}</Text>
          <Text style={styles.bookDetailText}>Author: {lastBookRead.author}</Text>
          <Text style={styles.bookDetailText}>Genre: {lastBookRead.genre}</Text>
          <Text style={styles.bookDetailText}>Total Pages: {lastBookRead.totalPages}</Text>
        </View>
      )}
      <View style={styles.newBookButtonContainer}>
        <Button
          title="Enter a new book"
          onPress={() => navigation.navigate('BookEntry')}
          color="#fc7b54"
        />
      </View>
      <View style={styles.mainSummaryContainer}> 
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Total Pages Ever Read:</Text>
          <Text style={styles.summaryText}>{totalPagesEverRead}</Text>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Average Pages Read So Far:</Text>
          <Text style={styles.summaryText}>{averagePagesRead.toFixed(2)}</Text>
        </View>
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
    marginTop: 40,
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#75FA8D',
    backgroundColor: '#732BF5',
    paddingTop: 10,
    paddingRight: 85,
    paddingBottom: 10,
    paddingLeft: 85,
  },
  image: {
    width: 400,
    height:200,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 5,
    marginBottom:20,
  },
  heading: {
    color: '#75FA8D',
    fontSize: 20,
  },
  bookDetails: {
    alignSelf: 'flex-start',
    marginBottom: 20,
    marginLeft: 30,
    marginTop: 50,
  },
  bookDetailText: {
    marginBottom: 10,
    color: '#75FA8D',
    fontSize: 30,
  },
  newBookButtonContainer: {
    marginTop: 20,
  },
  mainSummaryContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#732BF5',
    paddingTop: 20, 
    paddingLeft: 30,
    paddingBottom: 20,
  },
  summaryContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  summaryTitle: {
    fontSize: 30,
    marginRight: 10,
    color: '#75FA8D',
  },
  summaryText: {
    fontSize: 30,
    color: '#75FA8D',
  },
});

export default HomePage;