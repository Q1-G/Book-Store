import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useBooks } from './BookContext';
import { useNavigation } from '@react-navigation/native';

const Genre: React.FC = () => {
  const { books } = useBooks();
  const [genreCounts, setGenreCounts] = useState<{ [key: string]: number }>({});
  const navigation = useNavigation();

  
  useEffect(() => {
    const counts: { [key: string]: number } = {};
    books.forEach((book) => {
      counts[book.genre] = (counts[book.genre] || 0) + 1;
    });
    setGenreCounts(counts);
  }, [books]);

  
  const allGenres = [
    'Fantasy',
    'Education',
    'Mystery',
    'Romance',
    'Thriller',
    'History',
    'Horror',
    'Crime investigation',
    'Business',
    'Motivational',
    'Religion',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Store</Text>
      <Text style={styles.subTitle}>Genres you have read</Text>
      {allGenres.map((genre) => (
        <View key={genre} style={styles.genreItem}>
          <Text style={styles.genreText}>{genre} - {genreCounts[genre] || 0}</Text>
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <Button
          title="Return Home"
          onPress={() => navigation.navigate('HomePage')}
          color="#fc7b54"
        />
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
    paddingTop: 3,
    paddingRight: 55,
    paddingBottom: 10,
    paddingLeft: 55,
  },
  subTitle: {
    fontSize: 40,
    marginBottom: 20,
    color: '#75FA8D',
    backgroundColor: '#732BF5',
    paddingTop: 10,
    paddingRight: 55,
    paddingBottom: 10,
    paddingLeft: 55,
  },
  genreItem: {
    borderWidth: 3,
    borderColor: '#75FA8D',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '80%',
    backgroundColor: '#732BF5',
  },
  genreText: {
    color: '#75FA8D',
    fontSize: 20,
  },
  buttonContainer: {
    marginTop: 2,
  },
});

export default Genre;