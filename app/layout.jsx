import { View, StyleSheet } from "react-native";
import Header from "../components/Header";


export default function Layout({ children }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>{children}</View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingBottom: 50, // Avoids overlap with footer
  },
});

