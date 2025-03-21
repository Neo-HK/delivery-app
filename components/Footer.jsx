import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>© 2025 Your Company | All Rights Reserved</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#6200ea",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

