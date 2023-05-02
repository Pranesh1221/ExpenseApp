import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const ReviewExpenses = () => {
  const navigation = useNavigation();
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
    });
  }, []);
  return (
    <View>
      <Text>ReviewExpenses</Text>
    </View>
  );
};

export default ReviewExpenses;

const styles = StyleSheet.create({});
