import "react-native-gesture-handler";
import React from "react";
import Layout from "./app/layout";
import Navigation from "./navigation/Navigation"; // Import Navigation

export default function App() {
  return (
    <Layout>
      <Navigation /> {/* Keep only one NavigationContainer in Navigation.jsx */}
    </Layout>
  );
}


