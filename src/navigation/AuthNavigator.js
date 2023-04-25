import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as Screens from "../screens";
import { Routes } from "./Routes";
import { MyDrawer } from "../components";
import { Ionicons} from "@expo/vector-icons";

const Drawer = createDrawerNavigator()

export const AuthNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown:false, 
            drawerActiveBackgroundColor: "#8c263f",
            drawerActiveTintColor: "#ffffff",
            drawerInactiveTintColor: "#333",
            drawerLabelStyle:{
                fontSize: 15,
                fontWeight: "bold",
                marginLeft: -25,
            } }} drawerContent={props => <MyDrawer {...props} /> }>
        <Drawer.Screen 
            name={Routes.Home} 
            component={Screens.HomeScreen}
            options={{ drawerIcon: ({color}) => (
                <Ionicons name="home-outline" size={24} color={color} />
            )
             }}
             />

        <Drawer.Screen
            name={Routes.Profile}
            component={Screens.ProfileScreen}
            options={{ drawerIcon: ({color}) => (
                <Ionicons name="person-outline" size={24} color={color} />
            )
             }} />
        </Drawer.Navigator>
    );
    }