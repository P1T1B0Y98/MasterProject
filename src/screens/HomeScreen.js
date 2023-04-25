import * as React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Button, Title,  } from 'react-native-paper';
import { Icon } from '@rneui/themed';
import { useAuth } from '../containers/Auth';
import { HeaderMain } from '../components';
import _get from 'lodash/get';
 
import {
  StyledButton,
  ButtonText,
  InnerContainer,
  PageTitle,
  StatusBarStyle,
  StyledContainer,
  ExtraText,
  ExtraView,
  Header
} from '../components/styles';
export const HomeScreen = ({navigation}) => {
  const { onLogout, loading: userLoading, refetch, accessToken, currentUser } = useAuth();
  console.info("current user", currentUser.firstName);
  return (
     <StyledContainer>
      <InnerContainer>
     <HeaderMain navigation={navigation}/>
      <StatusBar style={StatusBarStyle} />
      <Icon 
        name="heartbeat" 
        type='font-awesome' 
        size={150} 
        color="#8c263f" 
        style={{marginTop: 50}}
        />
      <ExtraText>Welcome to your personal health app</ExtraText>
      <ExtraText> {currentUser.firstName}</ExtraText>
      </InnerContainer>
    </StyledContainer>
  );
}

