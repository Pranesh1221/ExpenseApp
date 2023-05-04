import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";

const ReviewExpense = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Claims",
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
      <Text>ReviewExpense</Text>
    </View>
  );
};

export default ReviewExpense;

const styles = StyleSheet.create({});
