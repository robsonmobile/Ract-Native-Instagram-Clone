import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Stories from "./components/Stories";

export default function App() {
  return (
    <>
      <Header />
      <Stories />
      <Feed />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
