import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Store</Text>
      <Text style={styles.subTitle}>Forgot your password?</Text>
      <Text style={styles.paragraph}>
        Please enter your email address below and we will send a link to your email to reset your password.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Reset Password"
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
    color: '#75FA8D',
    marginTop: 40,
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
  },
  paragraph: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#75FA8D',
    fontSize: 30,
    backgroundColor: '#732BF5',
    paddingTop: 10,
    paddingRight: 55,
    paddingBottom: 10,
    paddingLeft: 55,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 80,

  },
  input: {
    borderWidth: 1,
    borderColor: '#75FA8D',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '50%',
    backgroundColor: 'white',
    marginTop: 150,
  },
  buttonContainer: {
    width: '50%',
  },
});

export default ForgotPassword;