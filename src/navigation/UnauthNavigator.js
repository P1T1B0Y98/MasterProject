import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Screens from '../screens';
import { Routes } from './Routes';
import { 
        InnerContainer, 
        PageTitle, 
        StyledContainer } from '../components/styles';

const Stack = createNativeStackNavigator();

export const UnauthNavigator = () => {
  const [fetched, setFetch] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('@firstLoading')
      .then((v) => setFetch(v || 'none'))
      .catch(() => setFetch('error'));
  }, []);

  if (!fetched) {
    return (
      <StyledContainer>
        <InnerContainer>
          <PageTitle>Loading ...</PageTitle>
          </InnerContainer>
        </StyledContainer>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Landing} component={Screens.Landing} />
      <Stack.Screen name={Routes.Register} component={Screens.RegisterScreen} />
      <Stack.Screen name={Routes.Login} component={Screens.LoginScreen} />
    </Stack.Navigator>
  );
};

