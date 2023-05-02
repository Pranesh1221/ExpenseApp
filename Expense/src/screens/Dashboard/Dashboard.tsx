import { StyleSheet, Text, View } from "react-native";

import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const Dashboard = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Expense App",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#008fd3",
      },
    });
  }, []);
  return <></>;
};

export default Dashboard;

const styles = StyleSheet.create({});
