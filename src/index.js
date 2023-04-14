import React, { useRef } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Auth, useAuth } from './containers/Auth';
import { AuthNavigator, UnauthNavigator } from './navigation';
import * as Screens from './screens';
import { StyledContainer } from './components/styles';

const Stack = createNativeStackNavigator();

export default function App() {
  containerRef = useRef();
  return (
    <ApolloProvider client={client}>
      <Auth>
        <AuthWrapper />
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
