import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Stories from "./components/Stories";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stories />
        <Feed />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
