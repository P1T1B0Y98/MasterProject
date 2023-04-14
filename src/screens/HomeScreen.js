import * as React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Button, Title,  } from 'react-native-paper';
import { Icon } from '@rneui/themed';
import { useAuth } from '../containers/Auth';
 
import {
  StyledButton,
  ButtonText,
  InnerContainer,
  PageTitle,
  StatusBarStyle,
  StyledContainer,
  ExtraText,
  ExtraView
} from '../components/styles';
export const HomeScreen = () => {
  const { currentUser, onLogout, refetch } = useAuth();


  return (
     <StyledContainer>
      <StatusBar style={StatusBarStyle} />
      <Icon name="heartbeat" type='font-awesome' size={100} color="#8c263f" />
      <PageTitle>MyHealthAssessment</PageTitle>
      <ExtraText>Welcome to your personal health app</ExtraText>
      <ExtraText> To be continued...</ExtraText>
      <StyledButton onPress={onLogout}>
        <ButtonText>Logout</ButtonText>
      </StyledButton>
    </StyledContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Add padding to create space between the buttons
  },
  button: {
    marginTop: 10,
    width: '100%', // Set the width to 100% to make the buttons the same size
    height: 50, // Set the height to a fixed value to make the buttons the same size
    backgroundColor: '#8c263f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
  },  
});
