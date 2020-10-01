import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../pages/Homepage";

const screens = {
  Home: {
    screen: HomePage,
  },
};

const HomeStack = createStackNavigator(screens);
