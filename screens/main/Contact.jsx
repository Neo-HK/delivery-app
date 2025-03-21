import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons"; // Import icons

const Contact = () => {
  // Handle link opening for each social media or communication method
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      <Text style={styles.description}>
        If you have any questions or need assistance with your order, feel free to reach out through any of the following channels. We are available on various platforms for your convenience.
      </Text>

      <View style={styles.iconContainer}>
        {/* Facebook */}
        <TouchableOpacity onPress={() => openLink("https://facebook.com")}>
          <Ionicons name="logo-facebook" size={40} color="#4267B2" style={styles.icon} />
          <Text style={styles.iconLabel}>Facebook</Text>
        </TouchableOpacity>
       

        {/* Telegram */}
        <TouchableOpacity onPress={() => openLink("https://t.me/username")}>
          <Ionicons name="logo-telegram" size={40} color="#0088cc" style={styles.icon} />
          <Text style={styles.iconLabel}>Telegram</Text>

        </TouchableOpacity>
        
        {/* WhatsApp */}
        <TouchableOpacity onPress={() => openLink("https://wa.me/yourphonenumber")}>
          <Ionicons name="logo-whatsapp" size={40} color="#25D366" style={styles.icon} />
          <Text style={styles.iconLabel}>WhatsApp</Text>
        </TouchableOpacity>
       

        {/* TikTok */}
        <TouchableOpacity onPress={() => openLink("https://www.tiktok.com/@username")}>
          <Ionicons name="logo-tiktok" size={40} color="#000000" style={styles.icon} />
          <Text style={styles.iconLabel}>TikTok</Text>
        </TouchableOpacity>
       

        {/* Instagram */}
        <TouchableOpacity onPress={() => openLink("https://instagram.com/username")}>
          <Ionicons name="logo-instagram" size={40} color="#E4405F" style={styles.icon} />
          <Text style={styles.iconLabel}>Instagram</Text>
        </TouchableOpacity>
        

        {/* Phone */}
        <TouchableOpacity onPress={() => openLink("tel:+1234567890")}>
          <Ionicons name="call" size={40} color="#34B7F1" style={styles.icon} />
          <Text style={styles.iconLabel}>Phone</Text>

        </TouchableOpacity>
        
        {/* Email */}
        <TouchableOpacity onPress={() => openLink("mailto:email@example.com")}>
          <Ionicons name="mail" size={40} color="#D44638" style={styles.icon} />
          <Text style={styles.iconLabel}>Email</Text>
        </TouchableOpacity>
       
      </View>

      <Text style={styles.footerText}>
        Our team is always ready to help you. Feel free to contact us at any time!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#6200ea",
  },
  description: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  iconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  icon: {
    margin: 10,
  },
  iconLabel: {
    textAlign: "center",
    fontSize: 14,
    color: "#333",
    marginTop: 5,
  },
  footerText: {
    fontSize: 16,
    color: "#6200ea",
    marginTop: 30,
    textAlign: "center",
  },
});

export default Contact;
