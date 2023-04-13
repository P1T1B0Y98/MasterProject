import styled from "styled-components";
import { View, Text, Image, TextInput } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#ffffff",
    secondary: "#DEDEDE",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#8c263f",
    green: "#32D74B",
    red: "#FF453A",
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const ScrollContainer = styled.ScrollView`
    flex: 1;
    background-color: ${primary};
`;
export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 30}px;
    background-color: ${Colors.primary};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;
`;


export const PageTitle = styled.Text`
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    color: ${Colors.brand};
    padding: 10px;
`;

export const SubTitle = styled.Text`
    font-size: 15px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 50px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${Colors.tertiary};
    font-size: 10px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 25px;
    position: absolute;
    aliginItems: center;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 25px;
    position: absolute;
    z-index: 1;
`;

export const StatusBarStyle = styled.StatusBar``;



export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${Colors.brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
`;

export const ButtonText = styled.Text`
    color: ${Colors.primary};
    font-size: 16px;
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: flex-row;
    align-items: center;
    padding: 25px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-items: center;
    color: ${tertiary};
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;  

export const TextLinkContent = styled.Text`
    color: ${Colors.brand};
    font-size: 15px;
`;