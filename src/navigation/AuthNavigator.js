import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import * as Screens from "../screens";
import { Routes } from "./Routes";

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen 
            name={Routes.Home} 
            component={Screens.HomeScreen}
            options={{ header: () => null }} />
        </Stack.Navigator>
    );
    }