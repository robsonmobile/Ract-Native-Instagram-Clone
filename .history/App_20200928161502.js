import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./pages/Homepage";
import Profile from "./pages/Profile";

const Main = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Main.Navigator>
        <Main.Screen name="HomePage" component={HomePage} />
        <Main.Screen name="Profile" component={Profile} />
      </Main.Navigator>
    </NavigationContainer>
  );
}
