import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Post = ({item}) => {
    return (
        <View style={styles.post}>
          <View style={styles.user}>
            <View style={styles.userInfo}>
              <Image
                style={styles.profilPicture}
                source={{
                  uri: user.profilePicture,
                }}
              />
            </View>
          </View>
          <View style={styles.content}></View>
          <View style={styles.icons}></View>
          <View style={styles.info}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    post:{

    }
})

export default Post;