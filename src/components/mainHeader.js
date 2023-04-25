import React from "react"
import { StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { 
    Header,
    ExtraText, 
    ExtraView,
    StyledButton,
    ButtonText } from "./styles"

export const HeaderMain = ({left, right, navigation}) => {
    return (
        <Header style={styles.header} >
            {left? (
                left
            ) : (
                <StyledButton style={styles.logoButton}
                onPress={() => navigation.navigate("Home")}>
                <ExtraText style={styles.text}>MyHealthAssessment</ExtraText>
                </StyledButton>
            )}
             <StyledButton style={styles.menuButton}
                onPress={() => navigation.openDrawer()}>  
                <Ionicons
                size={30}
                name="menu-sharp"
                color="#ffffff">

                </Ionicons>
            </StyledButton>
        </Header>
    )
}

const styles = StyleSheet.create({
    menuButton: {
        position: "absolute",
        right: 0,
        top: 0,
        backgroundColor: "transparent",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center",
        position: "absolute",
        left: 10,
        paddingTop: 23,
    },
    logoButton: {
        position: "absolute",
        left: 5,
        height: 0,
        top: 0,
        backgroundColor: "transparent",
    },
    header: {
        backgroundColor: "#8c263f",
        height: 60,
        width: "100%",  
    },
})
