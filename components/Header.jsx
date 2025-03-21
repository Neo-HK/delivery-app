import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My App Header</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight, // Ensures content is below the status bar
    backgroundColor: "#6200ea",
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
