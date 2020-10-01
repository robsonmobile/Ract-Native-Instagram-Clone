import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Stories from "../components/Stories";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>ananza</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stories />
        <Feed />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomePage;
