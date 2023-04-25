import React, { useRef, useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';
import { SplashScreen } from 'expo';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Auth, useAuth } from './containers/Auth';
import { AuthNavigator, UnauthNavigator } from './navigation';
import 'react-native-gesture-handler';
import * as Screens from './screens';
import { StyledContainer } from './components/styles';

const Stack = createNativeStackNavigator();


export default function App() {
  const [token, setToken] = useState(null);
  const { authenticate, isAuthenticated, createToken } = useAuth();
  const [isLoadingComplete, setLoadingComplete] = useState(false); 
  const containerRef = useRef();

  useEffect(() => {
    if (token) {
      createToken(token)
      console.log('token:', token);
    }
  }, [token, isAuthenticated]);

  return (
    <ApolloProvider client={client}>
      <Auth>
        <SafeAreaView style={{ flex: 1 }}>
        <AuthWrapper />
        </SafeAreaView>
      </Auth>
    </ApolloProvider>
  );
  
}

function AuthWrapper() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
        {isAuthenticated ? 
          <AuthNavigator />
        : 
          <UnauthNavigator />
        }
    </NavigationContainer>
  );
}
