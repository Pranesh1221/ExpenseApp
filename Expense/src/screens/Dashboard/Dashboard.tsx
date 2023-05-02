import { StyleSheet, Text, View, Pressable, Image } from "react-native";

import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
const Dashboard = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Expense App",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#008fd3",
      },
      headerStyle: {
        backgroundColor: "white",
      },
    });
  }, []);
  return (
    <View style={styles.Box}>
      <Image
        style={{ width: "100%", height: 100 }}
        source={require("../../../assets/extra-large.jpg")}
      />
      <View style={styles.Main}>
        <Pressable   style={styles.Card}>
          <FontAwesome name="credit-card-alt" size={40} color="#008fd3" />
          <Text style={styles.Tests}>Expenses</Text>
          <Text style={styles.smallText}>List of your Expenses</Text>
        </Pressable>
        <Pressable style={styles.Card}>
          <Ionicons name="document-text-sharp" size={40} color="#008fd3" />
          <Text style={styles.Tests}>Expense Claims</Text>
          <Text style={styles.smallText}>Review and submit your clients</Text>
        </Pressable>
      </View>
      <View style={styles.Main}>
        <Pressable style={styles.Card}>
          <FontAwesome5 name="check" size={40} color="#008fd3" />
          <Text style={styles.Tests}>Approvals</Text>
          <Text style={styles.smallText}>Approve items anywhere, anytime</Text>
        </Pressable>
        <Pressable style={styles.Card}>
          <FontAwesome5 name="arrows-alt-h" size={40} color="#008fd3" />
          <Text style={styles.Tests}>Requests</Text>
          <Text style={styles.smallText}>Manage your authorisations</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
    padding: 20,
  },
  Card: {
    flex: 1,
    height: 150,
    width: 80,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  Box: {
    flex: 0.7,
  },
  Tests: {
    fontSize: 18,
    fontWeight: "bold",
  },
  smallText: {
    fontSize: 10,
    width: "80%",
    textAlign: "center",
  },
});
