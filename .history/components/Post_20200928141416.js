import React from "react";
import { Image, StyleSheet, Text, Dimensions, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const win = Dimensions.get("window");

const Post = ({ item }) => {
  return (
    <View style={styles.post}>
      <View style={styles.user}>
        <View style={styles.userInfo}>
          <Image
            style={styles.profilePicture}
            source={{
              uri: item.user.profilePicture,
            }}
          />
          <Text>{item.user.username}</Text>
        </View>
        <MaterialIcons name="more-vert" size={24} color="black" />
      </View>
      <View style={styles.content}>
        <Image
          style={styles.contentImage}
          source={{
            uri: item.content,
          }}
          resizeMode={"contain"}
        />
      </View>
      <View style={styles.icons}>
        <View style={styles.iconsLeft}>
          <AntDesign
            name="hearto"
            size={24}
            color="black"
            style={styles.icon}
          />
          <FontAwesome
            name="comment-o"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Feather name="send" size={24} color="black" style={styles.icon} />
        </View>
        <View style={styles.iconsRight}>
          <FontAwesome
            name="bookmark-o"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.info}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    marginTop: 10,
    marginBottom: 10,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
  },
  profilePicture: {
    height: 30,
    width: 30,
    borderRadius: 50,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentImage: {
    marginTop: 10,
    width: win.width,
    aspectRatio: 1,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconsLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconsRight: {
    marginRight:10
  },
  icon: {
    marginTop: 5,
    marginLeft: 10,
  },
});

export default Post;
