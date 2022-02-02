import { SafeAreaView, StyleSheet } from "react-native";
import Footer from "./src/Footer";
import Header from "./src/Header";
import Main from "./src/Main";
import StatusBarBackground from "./src/StatusBar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBarBackground style={{ backgroundColor: "midnightblue" }} /> */}
      <Header />
      <Main />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
