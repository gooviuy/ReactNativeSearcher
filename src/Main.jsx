import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Main = () => {
  return (
    <View>
      <Text>Hello dude !</Text>
      <View className={styles.button}>
        <TouchableOpacity onPress={() => console.log("pressed")}>
          <Text>Press Me !</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  button: {
    color: "blue",
    fontSize: 60,
  },
});
