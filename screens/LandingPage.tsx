import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

interface LandingPageProps {
  navigation: {
    navigate: (screenName: string) => void;
  };
}

const LandingPage: React.FC<LandingPageProps> = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate('LoginPage');
  };

  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.title}>BookStore</Text>
      <Image source={require('../assets/Book.jpg')} style={styles.image} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionContainerText}>The app that stores all your reading data</Text>
      </View>
      <View style={styles.loginContainer}>
        <Button title="Login" onPress={handleLoginPress} color='#fc7b54'/>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.orText}>or</Text>
        <Button title="Sign Up" onPress={handleSignUpPress} color='#fc7b54'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7478E6',
  },
  welcomeText:{
     textAlign: 'center',
     marginTop: 30,
     fontSize: 40,
     color: '#75FA8D',
     backgroundColor: '#732BF5',
    paddingTop: 10,
    paddingRight: 55,
    paddingBottom: 10,
    paddingLeft: 55,
    marginLeft: 100,
    marginRight: 100,
  },
  title: {
    textAlign: 'center',
     marginTop: 30,
     fontSize: 40,
     color: '#75FA8D',
     backgroundColor: '#732BF5',
    paddingTop: 10,
    paddingRight: 55,
    paddingBottom: 10,
    paddingLeft: 55,
    marginLeft: 150,
    marginRight: 150,
  },
  image: {
    width: 400,
    height:200,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 50,
  },
  descriptionContainer: {
    backgroundColor: '#732BF5',
    padding: 20,
    marginTop: 50,
    marginBottom: 20,
    marginRight: 100,
    marginLeft: 100,
  },
  descriptionContainerText: {
    color: '#75FA8D',
    fontSize: 40,
    textAlign: 'center',
  },
  loginContainer: {
    marginTop: 40,
    marginRight: 150,
    marginLeft: 150,
  },
  signUpContainer: {
    marginTop: 30,
    marginRight: 150,
    marginLeft: 150,
  },
  orText: {
    marginBottom: 30, 
    fontSize: 30,
    textAlign: 'center',
    color: '#75FA8D',
  },
});

export default LandingPage;