import { createDrawerNavigator  } from "@react-navigation/drawer";
import * as Screens from "../screens";
import { Routes } from "./Routes";
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name={Routes.HomeScreen} 
        component={Screens.HomeScreen} />
    </Drawer.Navigator>
  );
}