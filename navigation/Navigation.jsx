import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/main/Home";
import ContactScreen from "../screens/main/Contact";
import ProductsScreen from "../screens/main/Products";
import ServicesScreen from "../screens/main/Services";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Contact") iconName = "call";
          else if (route.name === "Products") iconName = "cart";
          else if (route.name === "Services") iconName = "construct";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#6200ea",
        tabBarInactiveTintColor: "gray",
        headerShown: false, // Hide header for clean navigation
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}
