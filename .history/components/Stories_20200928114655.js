import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 

const Stories = () => {
    return (
        <View style={styles.stories}>
            <View>
                <Text>Stories</Text>
                <FontAwesome name="play" size={24} color="black" />Play
            </View>
            <View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    stories: {
      backgroundColor: "#f9f9f9",
      borderBottomWidth: 1,
      borderBottomColor: "lightgray",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 10,
    },
  });

export default Stories;