import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomePage from "./pages/Homepage";
import Profile from "./pages/Profile";

const Main = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Main.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Main.Screen name="HomePage" component={HomePage} />
        <Main.Screen name="Profile" component={Profile} />
      </Main.Navigator>
      <Tab.Navigator>
        <Tab.Screen name="Homepage" component={Homepage} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
