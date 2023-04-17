import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import * as Screens from "../screens";
import { Routes } from "./Routes";

const Drawer = createDrawerNavigator()

export const AuthNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen 
            name={Routes.Home} 
            component={Screens.HomeScreen}
            options={{ header: () => null }} />

        <Drawer.Screen
            name={Routes.Profile}
            component={Screens.ProfileScreen}
            options={{ header: () => null }} />
        </Drawer.Navigator>
    );
    }