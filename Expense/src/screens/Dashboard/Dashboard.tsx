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
  return (
    <View style={styles.Main}>
      <View style={styles.Card}>
        <Text>Expenses</Text>
      </View>
      <View style={styles.Card}>
        <Text>Expenses Claims</Text>
      </View>
      <View style={styles.Card}>
        <Text>Approvals</Text>
      </View>
      <View style={styles.Card}>
        <Text>Requests</Text>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    flexDirection: "row",
  },
  Card: {
    flex: 1,
    height: 150,
    width: 100,
    borderWidth: 2,
  },
});
