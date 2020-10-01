import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text>Instagram</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
      backgroundColor: "lightgray",
    },
  });

export default Header;