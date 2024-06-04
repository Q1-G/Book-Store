import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import { BooksProvider } from './BookContext'; 
import LandingPage from './screens/LandingPage';
import LoginPage from './screens/LoginPage';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';
import Genre from './screens/Genre';
import BookEntry from './screens/BookEntry';
import BookHistory from './screens/BookHistory';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomePage from './screens/HomePage';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <BooksProvider> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ title: 'Home Page' }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: 'Sign Up' }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ title: 'Forgot Password' }}
          />
          <Stack.Screen
            name="Genre"
            component={Genre}
            options={{ title: 'Genre' }}
          />
          <Stack.Screen
            name="BookEntry"
            component={BookEntry}
            options={{ title: 'Book Entry' }}
          />
          <Stack.Screen
            name="BookHistory"
            component={BookHistory}
            options={{ title: 'Book History' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BooksProvider>
  );
}

export default App;
