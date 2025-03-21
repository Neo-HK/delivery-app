import React from "react";
import { View, Text, Button } from "react-native";

const Settings = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings Screen</Text>
      <Button title="Back to Category" onPress={() => navigation.navigate("Category")} />
    </View>
  );
};

export default Settings;
