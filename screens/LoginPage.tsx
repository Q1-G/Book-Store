import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './Types'; 

interface LoginPageProps {
  navigation: StackNavigationProp<RootStackParamList, 'LoginPage'>; 
}

const LoginPage: React.FC<LoginPageProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleLoginPress = () => {
    if (username === '1234' && password === '1234') {
      navigation.navigate('HomePage');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Store</Text>
      <Text style={styles.subTitle}>Login</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionContainerText}>
          Login to book store and store your favorite books now.
        </Text>
      </View>
      <TextInput
        style={styles.usernameInput}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.passwordInput}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLoginPress} color='#fc7b54'/>
        <TouchableOpacity onPress={handleForgotPasswordPress}>
          <Text style={styles.buttonContainerText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7478E6',
    alignItems:'center'
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
    marginLeft: 100,
    marginRight: 100,
  },
  subTitle: {
    textAlign: 'center',
     marginTop: 80,
     fontSize: 40,
     color: '#75FA8D',
  },
  descriptionContainer: {
    backgroundColor: '#732BF5',
    marginBottom: 20,
    padding: 30,
    marginTop: 5,
    marginRight: 30,
    marginLeft: 30,
  },
  descriptionContainerText: {
    color: '#75FA8D',
    fontSize: 40,
    textAlign: 'center'
  },
  usernameInput: {
    height: 40,
    width: '80%',
    borderColor: '#732BF5',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    marginTop: 50,
    backgroundColor: '#FFFFFF'
  },
  passwordInput: {
    height: 40,
    width: '80%',
    borderColor: '#732BF5',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  buttonContainerText: {
    marginTop: 20,
  },
});

export default LoginPage;

function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
