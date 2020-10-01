import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Nav from "../components/Nav";
import { AntDesign } from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.profile}>
      <Nav navigation={navigation} title="safak" />
      <View style={styles.profileUser}>
        <Image
          style={styles.profilePicture}
          source={{
            uri:
              "https://images.pexels.com/photos/3913498/pexels-photo-3913498.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          }}
          resizeMode={"cover"}
        />
        <View style={styles.profileCounters}>
          <View style={styles.profileCounterItem}>
            <Text style={styles.profileCounterItemNumber}>124</Text>
            <Text>Posts</Text>
          </View>
          <View style={styles.profileCounterItem}>
            <Text style={styles.profileCounterItemNumber}>763</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.profileCounterItem}>
            <Text style={styles.profileCounterItemNumber}>847</Text>
            <Text>Followings</Text>
          </View>
        </View>
      </View>
      <View style={styles.profileUserDesc}>
        <Text style={styles.profileUserDescName}>Safak Kocaoglu</Text>
        <Text style={styles.profileUserDescText}>
          Oh man, I shot Marvin in the face
        </Text>
      </View>
      <View style={styles.followInfo}>
        <View style={styles.followInfoFollow}>
          <Text>Follow</Text>
        </View>
        <View style={styles.followInfoMessage}>
          <Text>Message</Text>
        </View>
        <View style={styles.followInfoSmall}>
          <AntDesign name="down" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {},
  profileUser: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  profilePicture: {
    height: 75,
    width: 75,
    borderRadius: 50,
  },
  profileCounters: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  profileCounterItem: {
    marginRight: 20,
    alignItems: "center",
  },
  profileCounterItemNumber: {
    fontWeight: "bold",
    fontSize: 18,
  },
  profileUserDesc: {
    marginTop: 5,
    marginLeft: 15,
  },
  profileUserDescName: {
    fontWeight: "bold",
  },
  followInfo: {
    marginTop: 10,
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  followInfoFollow: {
    flex: 0.4,
    backgroundColor:"blue",
    padding:5,
    alignItems:"center",
    borderRadius:10
  },
  followInfoMessage: {
    flex: 0.4,
    padding:5,
    alignItems:"center",
    borderRadius:10,
    borderWidth:1
  },
  followInfoSmall: {
    flex: 0.2,
  },
});

export default Profile;
