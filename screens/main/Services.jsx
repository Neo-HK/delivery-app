import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // Import icons

const Services = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order and Delivery Services</Text>

      {/* Cosmetics */}
      <TouchableOpacity style={styles.serviceSection} onPress={() => alert('Order Cosmetics')}>
        <Ionicons name="logo-facebook" size={40} color="#F0A7A0" />
        <Text style={styles.serviceTitle}>Cosmetics</Text>
        <Text style={styles.serviceDescription}>
          Shop for skincare, makeup, and hair care products delivered right to your door.
        </Text>
      </TouchableOpacity>

      {/* Clothes */}
      <TouchableOpacity style={styles.serviceSection} onPress={() => alert('Order Clothes')}>
        <FontAwesome name="tshirt" size={40} color="#4CAF50" />
        <Text style={styles.serviceTitle}>Clothes</Text>
        <Text style={styles.serviceDescription}>
          Browse our trendy collection of clothes and have them delivered to your doorstep.
        </Text>
      </TouchableOpacity>

      {/* Construction Materials */}
      <TouchableOpacity style={styles.serviceSection} onPress={() => alert('Order Construction Materials')}>
        <Ionicons name="construct" size={40} color="#FF9800" />
        <Text style={styles.serviceTitle}>Construction Materials</Text>
        <Text style={styles.serviceDescription}>
          Get construction essentials like cement, bricks, and tools delivered to your site.
        </Text>
      </TouchableOpacity>

      {/* Packed Foods */}
      <TouchableOpacity style={styles.serviceSection} onPress={() => alert('Order Packed Foods')}>
        <Ionicons name="restaurant" size={40} color="#FF5722" />
        <Text style={styles.serviceTitle}>Packed Foods</Text>
        <Text style={styles.serviceDescription}>
          Order convenient and ready-to-eat meals and snacks delivered to your door.
        </Text>
      </TouchableOpacity>

      {/* Cleaning Materials */}
      <TouchableOpacity style={styles.serviceSection} onPress={() => alert('Order Cleaning Materials')}>
        <Ionicons name="logo-octocat" size={40} color="#03A9F4" />
        <Text style={styles.serviceTitle}>Cleaning Materials</Text>
        <Text style={styles.serviceDescription}>
          Order soaps, detergents, and disinfectants to keep your home sparkling clean.
        </Text>
      </TouchableOpacity>

      {/* Medicines */}
      <TouchableOpacity style={styles.serviceSection} onPress={() => alert('Order Medicines')}>
        <Ionicons name="medkit" size={40} color="#4CAF50" />
        <Text style={styles.serviceTitle}>Medicines</Text>
        <Text style={styles.serviceDescription}>
          Order essential medicines and health products with home delivery.
        </Text>
      </TouchableOpacity>

      {/* Farming Materials */}
      <TouchableOpacity style={styles.serviceSection} onPress={() => alert('Order Farming Materials')}>
        <Ionicons name="leaf" size={40} color="#8BC34A" />
        <Text style={styles.serviceTitle}>Farming Materials</Text>
        <Text style={styles.serviceDescription}>
          Get fertilizers, pesticides, and farming tools delivered directly to your farm.
        </Text>
      </TouchableOpacity>
    </View>
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
    marginBottom: 30,
    textAlign: 'center',
  },
  serviceSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    elevation: 5, // Add shadow for Android
    borderWidth: 1,
    borderColor: '#ddd',
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 15,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
  },
});

export default Services;
