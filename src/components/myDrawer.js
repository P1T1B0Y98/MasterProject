import { 
    DrawerContentScrollView,
    DrawerItemList } from "@react-navigation/drawer";
  import { 
    ExtraView,
    ExtraText, 
    SmallButton,
    ButtonText } from "./styles";
  import React from "react";
  import { View, StyleSheet } from "react-native";
  import { Ionicons } from "@expo/vector-icons";
  import { useAuth } from "../containers/Auth";
  
  
  export const MyDrawer = props => {
    const { currentUser, onLogout } = useAuth();
    return (
      <View style={{flex: 1}} >
        <DrawerContentScrollView {...props}
        contentContainerStyle={{backgroundColor: '#ffffff' }}>
          <View style={styles.header}>
            <Ionicons name="person-circle-outline" size={80} color="#cdcdcd" />
              <ExtraText style={styles.name}>  {currentUser.fullName}</ExtraText>
          </View>
          <View style={styles.mainNav}>
          <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
        <View style={styles.logout}>
          <SmallButton style={styles.button} onPress={onLogout}>
            <View style={styles.bottom}>
              <Ionicons name="log-out-outline" size={30} color="#000000" />
              <ButtonText style={styles.logoutText}>Logout</ButtonText>
            </View>
          </SmallButton>
        </View>
      </View>
    );
  }
  
  styles = StyleSheet.create({
    name: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#cdcdcd",
    },
    header: {
      backgroundColor: "#8c263f",
      height: 150,
      alignItems: "center",
      justifyContent: "center",
      marginTop: -10,
    },
    mainNav: {
      flex: 1,
      paddingTop: 10,
    },
    logout: {
      borderTopWidth: 0.5,
      borderColor: "#000000",
      height: 70,
      alignItems: "center",
      flexDirection: "row",
    },
    button: {
      width: 150,
      height: 50,
      paddingVertical: 15,
    },
    logoutText: {
      color: "#000000",
      fontSize: 15,
      marginLeft: 10,
    },
    bottom: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  })