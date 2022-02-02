import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";

const Main = () => {
  return (
    <View>
      <View style={styles.main}>
        <View style={styles.container}>
          <TextInput style={styles.input} />
          <TouchableOpacity onPress={() => console.log("pressed")}>
            <Text style={styles.search}>Search !</Text>
          </TouchableOpacity>
        </View>
        {/*  <Image source={require("../assets/favicon.png")} /> require() utilziado para importar imagen local */}
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  main: {
    width: 360,
    height: 540,
    /*  flex: 1, */
    /*  justifyContent: "center", */
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 60,
    color: "blue",
  },
  input: {
    width: 180,
    borderRadius: 10,
    borderBottomColor: "black",
    borderWidth: 2,
    height: 30,
    backgroundColor: "white",
    marginRight: 10,
    paddingHorizontal: 10,
  },
  search: {
    fontSize: 20,
    color: "blue",
  },
  container: {
    flexDirection: "row",
    /*   padding: 20, */
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: "cover",
  },
});
