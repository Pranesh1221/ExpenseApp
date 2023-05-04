import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";

const RequestExpense = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Requests",
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
      <Text>RequestExpense</Text>
    </View>
  );
};

export default RequestExpense;

const styles = StyleSheet.create({});
