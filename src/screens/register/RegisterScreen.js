import React, { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { Formik } from "formik";

import { Octicons, Ionicons } from "@expo/vector-icons";

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
  RightIcon,
  Colors,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  StyledButton,
  ButtonText,
  ScrollContainer
} from "../../components/styles";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from '@rneui/themed';
import { useRegister } from './useRegister';

const { brand, darkLight } = Colors;

export const RegisterScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const { onRegister, loading, error } = useRegister();
  const navigation = useNavigation();
  const goLogin = useCallback(
    () => navigation.navigate("Login"),
    []
  );
  return (

    <ScrollContainer>
      <StatusBar style="dark" />
      <InnerContainer>
      <Icon name="heartbeat" type='font-awesome' size={100} color="#8c263f" /> 
        <PageTitle>My App</PageTitle>
        <SubTitle>Account Registration</SubTitle>

        <Formik
          initialValues={{ name: "", email: "", password: "", confirmPassword: ""}}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Required";
            } else if (values.name.length < 3) {
              errors.name = "Must be 3 characters or more";
            }
            if (!values.email) {
              errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 6) {
              errors.password = "Must be 6 characters or more";
            }
            if (!values.confirmPassword) {
              errors.confirmPassword = "Required";
            } else if (values.confirmPassword !== values.password) {
              errors.confirmPassword = "Passwords do not match";
            }

            console.log(errors);
          }}

            onSubmit={({ email, password }) => {
              console.log({ email, password });
              onRegister({ email, password });
            }}

        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (<StyledFormArea>
            <MyTextInput
              label="Name"
              icon="person"
              placeholder="Full name"
              color="#ffffff"
              editable={!loading}
              placeholderTextColor={darkLight}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              keyboardType="default"
            />
            <MyTextInput
              label="Email Address"
              icon="mail"
              placeholder="Email"
              color="#ffffff"
              editable={!loading}
              placeholderTextColor={darkLight}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
            />

            <MyTextInput
              label="Password"
              icon="lock"
              placeholder="Password"
              color="#ffffff"
              editable={!loading}
              placeholderTextColor={darkLight}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry={true}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
              
            />
            <MyTextInput
              label="Confirm Password"
              icon="lock"
              placeholder="Confirm password"
              color="#ffffff"
              editable={!loading}
              placeholderTextColor={darkLight}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
              secureTextEntry={true}
              isPassword={true}
              hidePassword={hideConfirmPassword}
              setHidePassword={setHideConfirmPassword}
              
            />
             <MsgBox>...</MsgBox>
            <StyledButton onPress={handleSubmit}>
              <ButtonText>Register</ButtonText>
            </StyledButton>
            <Line />
            <ExtraView>
              <ExtraText>Have an account already?</ExtraText>
              <TextLink onPress={goLogin}>
                <TextLinkContent>Login</TextLinkContent>
              </TextLink> 
            </ExtraView>
          </StyledFormArea>)}
        </Formik>
      </InnerContainer>
    </ScrollContainer>
  );
};

const MyTextInput = ({ label, icon, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {props.isPassword && (
        <RightIcon onPress={() => props.setHidePassword(!props.hidePassword)}>
          <Ionicons name={props.hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
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


