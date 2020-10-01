import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Stories from "../components/Stories";
import { feedPostArray } from "../dummyData";

const Homepage = ({ navigation }) => {
  console.log(navigation.navigate)
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Stories />
          <Feed posts={feedPostArray} navigation={navigation} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default Homepage;
