import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import { AntDesign } from '@expo/vector-icons'; 

const Main = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={{ backgroundColor: '#f9f9f9' }}>
        <Tab.Screen name="Homepage" options={{tabBarLabel:() => {return null}, tabBarIcon:()=>(<AntDesign name="home" size={24} color="black" />)}} component={Homepage} />
        <Tab.Screen name="Search" options={{tabBarLabel:() => {return null}, tabBarIcon:()=>(<AntDesign name="search1" size={24} color="black" />)}} component={Homepage} />
        <Tab.Screen name="Camera" options={{tabBarLabel:() => {return null}, tabBarIcon:()=>(<AntDesign name="home" size={24} color="black" />)}} component={Homepage} />
        <Tab.Screen name="Heard" options={{tabBarLabel:() => {return null}, tabBarIcon:()=>(<AntDesign name="home" size={24} color="black" />)}} component={Homepage} />
        <Tab.Screen name="Profile" options={{tabBarLabel:() => {return null}, tabBarIcon:()=>(<AntDesign name="home" size={24} color="black" />)}} component={Homepage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
