import React from 'react';
import { InnerContainer, StyledContainer, PageTitle, ExtraView, ExtraText } from '../../components/styles';
import { HeaderMain } from '../../components';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../containers/Auth';
import { size } from 'lodash';
export const ProfileScreen = ({navigation}) => {
    const { currentUser } = useAuth();
    return (
        <StyledContainer>
            <HeaderMain navigation={navigation}/>
            <InnerContainer>
                <PageTitle>Profile</PageTitle>
                <ExtraView>
                    <Ionicons name="ios-person" size={50} color="#8c263f" />
                </ExtraView>
                <ExtraText>Name: {currentUser.firstName}  {currentUser.fullName}</ExtraText>
                <ExtraText>Email: {currentUser.email}</ExtraText>
                <ExtraView>
                    <ExtraText style={styles.text}  >Add more fun stuff in the future</ExtraText>
                </ExtraView>
            </InnerContainer>
        </StyledContainer>
    )
}

styles = StyleSheet.create({ 
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#8c263f",
        textAlign: "center",
        position: "absolute",
        paddingTop: 23,
    }
})
