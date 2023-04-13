import React from 'react';
import { View, Text } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Auth, useAuth } from './containers/Auth';
import * as Screens from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
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
      <Stack.Navigator>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Home" component={Screens.HomeScreen} />
            {/* Other authenticated screens */}
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Screens.LoginScreen} />
            <Stack.Screen name="Register" component={Screens.RegisterScreen} />
            {/* Other unauthenticated screens */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
