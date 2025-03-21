import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // Import icons for different categories

const Products = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Product Categories</Text>

      {/* Cosmetics */}
      <TouchableOpacity style={styles.section} onPress={() => alert("Cosmetics")}>
        <Ionicons name="logo-facebook" size={40} color="#F0A7A0" />
        <Text style={styles.sectionText}>Cosmetics</Text>
        <Text style={styles.description}>Make yourself feel beautiful with a wide range of cosmetics including skincare, makeup, and hair products.</Text>
      </TouchableOpacity>

      {/* Clothes */}
      <TouchableOpacity style={styles.section} onPress={() => alert("Clothes")}>
        <FontAwesome name="tshirt" size={40} color="#4CAF50" />
        <Text style={styles.sectionText}>Clothes</Text>
        <Text style={styles.description}>Stay fashionable with our trendy clothing collection for all occasions and seasons.</Text>
      </TouchableOpacity>

      {/* Construction Materials */}
      <TouchableOpacity style={styles.section} onPress={() => alert("Construction Materials")}>
        <Ionicons name="construct" size={40} color="#FF9800" />
        <Text style={styles.sectionText}>Construction Materials</Text>
        <Text style={styles.description}>Find all the essential materials for your construction projects, from cement to bricks.</Text>
      </TouchableOpacity>

      {/* Packed Foods */}
      <TouchableOpacity style={styles.section} onPress={() => alert("Packed Foods")}>
        <Ionicons name="restaurant" size={40} color="#FF5722" />
        <Text style={styles.sectionText}>Packed Foods</Text>
        <Text style={styles.description}>Convenient and ready-to-eat food products that are perfect for a quick meal.</Text>
      </TouchableOpacity>

      {/* Cleaning Materials */}
      <TouchableOpacity style={styles.section} onPress={() => alert("Cleaning Materials")}>
        <Ionicons name="logo-octocat" size={40} color="#03A9F4" />
        <Text style={styles.sectionText}>Cleaning Materials</Text>
        <Text style={styles.description}>Everything you need for a clean home: soaps, detergents, and disinfectants.</Text>
      </TouchableOpacity>

      {/* Medicines */}
      <TouchableOpacity style={styles.section} onPress={() => alert("Medicines")}>
        <Ionicons name="medkit" size={40} color="#4CAF50" />
        <Text style={styles.sectionText}>Medicines</Text>
        <Text style={styles.description}>Get well soon with essential medicines for common ailments and health conditions.</Text>
      </TouchableOpacity>

      {/* Farming Materials */}
      <TouchableOpacity style={styles.section} onPress={() => alert("Farming Materials")}>
        <Ionicons name="leaf" size={40} color="#8BC34A" />
        <Text style={styles.sectionText}>Farming Materials</Text>
        <Text style={styles.description}>Boost your crops with farming essentials, including herbicides, pesticides, and fertilizers like urea.</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6200ea',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    flexDirection: 'column', // Change from 'row' to 'column' to stack icon and label
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    elevation: 5, // Adds shadow for Android
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sectionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10, // Add spacing between the icon and text
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
    textAlign: 'center', // Center the description text
  },
});

export default Products;


