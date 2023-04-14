import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Icon } from '@rneui/themed';
import { Routes } from '../../navigation/Routes';
 
import {
  StyledButton,
  ButtonText,
  InnerContainer,
  PageTitle,
  StatusBarStyle,
  StyledContainer,
  ExtraText
} from '../../components/styles';
export const Landing = ({ navigation }) => {

  return (
     <StyledContainer>
     <InnerContainer>
      <StatusBar style={StatusBarStyle} />
      <Icon name="heartbeat" type='font-awesome' size={100} color="#8c263f" />
      <PageTitle>MyHealthAssessment</PageTitle>
      <ExtraText>Welcome to your personal health app</ExtraText>
      <StyledButton 
        onPress={() => navigation.navigate(Routes.Login)}>
        <ButtonText>Login</ButtonText>
        </StyledButton>
        <StyledButton 
        onPress={() => navigation.navigate(Routes.Register)}>
        <ButtonText>Register</ButtonText>
        </StyledButton>

      </InnerContainer>
    </StyledContainer>
  );
}
