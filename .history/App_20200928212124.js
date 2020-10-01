import React from "react";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Add from "./pages/Add";
import Explore from "./pages/Explore";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={{ backgroundColor: "#f9f9f9" }} shifting={false}>
        <Tab.Screen
          name="Homepage"
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
            
          }}
          component={Homepage}
        />
        <Tab.Screen
          name="Search"
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: () => (
              <AntDesign name="search1" size={24} color="black" />
            ),
          }}
          component={Search}
        />
        <Tab.Screen
          name="Camera"
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: () => (
              <AntDesign name="plussquareo" size={24} color="black" />
            ),
          }}
          component={Add}
        />
        <Tab.Screen
          name="Heard"
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: () => (
              <AntDesign name="hearto" size={24} color="black" />
            ),
          }}
          component={Explore}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: () => (
              <Image
                style={styles.tabProfilePicture}
                source={{
                  uri:
                    "https://images.pexels.com/photos/2576788/pexels-photo-2576788.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                }}
              />
            ),
          }}
          component={<Profile/>}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabProfilePicture: {
    width: 24,
    height: 24,
    borderRadius:50
  },
});
