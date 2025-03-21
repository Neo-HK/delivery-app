import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Category = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category Screen</Text>
      <Button title="Go to Orders" onPress={() => navigation.navigate("Orders")} />
      <Button title="Logout" onPress={() => navigation.replace("Logout")} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Category;
