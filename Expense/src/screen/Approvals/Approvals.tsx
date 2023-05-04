import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";

const Approvals = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Approvals",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#008fd3",
      },
      tabBarVisible: false,
    });
  }, []);
  return (
    <View>
      <Text>Approvals</Text>
    </View>
  );
};

export default Approvals;

const styles = StyleSheet.create({});
