import React, { useCallback, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { Formik, formik } from "formik";

import { Octicons, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { 
  StyledContainer, 
  InnerContainer,
  PageLogo,
  PageTitle, 
  SubTitle, 
  StyledFormArea, 
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  StyledButton,
  ButtonText,
  RightIcon,
  Colors,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent
} from "../../components/styles";

import { View, StyleSheet } from "react-native";
import { Icon } from '@rneui/themed';
import { useLogin } from "./useLogin";

const { brand, darkLight } = Colors;

export const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();
  const { onLogin, loading, error} = useLogin();
  const goRegister = useCallback(
    () => navigation.navigate("Register"),
    []
  );

  useEffect(() => {
    AsyncStorage.setItem('@firstLoading', 'initiated');
  }, []);

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
      <Icon name="heartbeat" type='font-awesome' size={100} color="#8c263f" /> 
        <PageTitle>My App</PageTitle>
        <SubTitle>Account Login</SubTitle>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
            onLogin(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (<StyledFormArea>
            <MyTextInput
              label="Email Address"
              icon="mail"
              placeholder="email"
              placeholderTextColor={darkLight}
              editable={!loading}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="default"
              error="wrong email"
            />

            <MyTextInput
              label="Password"
              icon="lock"
              placeholder="password"
              placeholderTextColor={darkLight}
              editable={!loading}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
              error={error.password && error.password.message}
              
            />
            <MsgBox>...</MsgBox>
            <StyledButton onPress={handleSubmit}>
              <ButtonText>Login</ButtonText>
            </StyledButton>
            <Line />
            <ExtraView>
              <ExtraText>Don't have an account already?</ExtraText>
              <TextLink onPress={goRegister}>
                <TextLinkContent>Register</TextLinkContent>
              </TextLink> 
            </ExtraView>
          </StyledFormArea>)}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' :'md-eye' } size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>

  );
}

const styles = StyleSheet.create({
  about: {
    top: 40,
    right: 20,
    position: 'absolute',
  },
  logo: {
    alignSelf: 'center',
  },
  form: {
    flex: 1,
    padding: 10,
  },
  btnSubmit: {
    marginTop: 40,
  },
  footerText: {
    padding: 5,
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
  },
  btn: {
    padding: 15,
    paddingTop: 5,
  },
});


