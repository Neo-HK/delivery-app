import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// Import Screens
import HomeScreen from "../screens/main/Home";
import ContactScreen from "../screens/main/Contact";
import ProductsScreen from "../screens/main/Products";
import ServicesScreen from "../screens/main/Services";
import LoginScreen from "../screens/auth/Login";

import RegisterScreen from "../screens/auth/Register";
import ForgotPasswordScreen from "../screens/auth/ForgotPassword";
import CategoryScreen from "../screens/main/Category";
import OrdersScreen from "../screens/main/Orders";
import SettingsScreen from "../screens/main/Settings";
import ProfileScreen from "../screens/main/Profile";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer Navigation inside Category
function CategoryDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Category">
      <Drawer.Screen name="Category" component={CategoryScreen} />
      <Drawer.Screen name="Orders" component={OrdersScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen
        name="Logout"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

// Main Navigation Structure
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Hide header for home screen
        />
        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Hide header for login screen
        />
        {/* Category Screen (with Drawer) */}
        <Stack.Screen
          name="Category"
          component={CategoryDrawer}
          options={{ headerShown: false }} // Hide header for category screen
        />
        {/* Other Screens */}
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{ headerShown: true }} // Show header
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Services"
          component={ServicesScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}








