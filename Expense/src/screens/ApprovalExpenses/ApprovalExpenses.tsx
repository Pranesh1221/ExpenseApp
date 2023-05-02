import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const ApprovalExpenses = () => {
  const navigation = useNavigation();
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
    });
  }, []);
  return (
    <View>
      <Text>ApprovalExpenses</Text>
    </View>
  );
};

export default ApprovalExpenses;

const styles = StyleSheet.create({});
