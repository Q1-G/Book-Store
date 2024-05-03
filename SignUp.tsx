import React from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Store</Text>
      <Text style={styles.heading}>Sign Up</Text>
      <Image
        source={require('./assets/user.png')}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Sign Up"
          onPress={handleNavigateToLogin}
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    marginTop: 40,
    color: '#75FA8D',
    backgroundColor: '#732BF5',
    paddingTop: 10,
    paddingRight: 55,
    paddingBottom: 10,
    paddingLeft: 55,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: '#75FA8D',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#75FA8D',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    backgroundColor: 'white',
  },
  buttonContainer: {
    width: '50%',
    marginTop: 30,
  },
});

export default SignUp;