import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// HomeScreen Component
const HomeScreen = () => {
  const navigation = useNavigation();

  // Handle navigation to login screen
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* Header with Login Button */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to the App</Text>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Sections */}
      <View style={styles.sectionsContainer}>
        <View style={styles.section}><Text style={styles.sectionText}>Section 1: Introduction</Text></View>
        <View style={styles.section}><Text style={styles.sectionText}>Section 2: Features</Text></View>
        <View style={styles.section}><Text style={styles.sectionText}>Section 3: Services</Text></View>
        <View style={styles.section}><Text style={styles.sectionText}>Section 4: Contact Us</Text></View>
      </View>

      {/* Icons for Products, Contact, and Services */}
      <View style={styles.iconContainer}>
        <Ionicons name="cart" size={24} color="#6200ea" onPress={() => navigation.navigate("Products")} style={styles.icon} />
        <Ionicons name="call" size={24} color="#6200ea" onPress={() => navigation.navigate("Contact")} style={styles.icon} />
        <Ionicons name="construct" size={24} color="#6200ea" onPress={() => navigation.navigate("Services")} style={styles.icon} />
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingTop: 40, // Prevents overlap with the status bar
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6200ea",
  },
  loginButton: {
    backgroundColor: "#6200ea",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 5,
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
  },
  sectionsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    width: "90%",
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow effect
  },
  sectionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  iconContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  icon: {
    marginHorizontal: 20,
  },
});

export default HomeScreen;


