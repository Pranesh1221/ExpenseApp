import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { styles } from "./DashBoardStyle";
import React, { useLayoutEffect } from "react";

import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
const DashBoard = ({navigation}) => {
  
  
  return (
    <View style={styles.Box}>
      <Image
        style={{ width: "100%", height: 100 }}
        source={require("../../../assets/extra-large.jpg")}
      />
      <View style={styles.Main}>
        <Pressable
          onPress={() => navigation.navigate("Expenses")}
          style={styles.Card}
        >
          <FontAwesome name="credit-card-alt" size={40} color="#008fd3" />
          <Text style={styles.Tests}>Expenses</Text>
          <Text style={styles.smallText}>List of your Expenses</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Claims")}
          style={styles.Card}
        >
          <Ionicons name="document-text-sharp" size={40} color="#008fd3" />
          <Text style={styles.Tests}>Expense Claims</Text>
          <Text style={styles.smallText}>Review and submit your clients</Text>
        </Pressable>
      </View>
      <View style={styles.Main}>
        <Pressable
          onPress={() => navigation.navigate("Approvals")}
          style={styles.Card}
        >
          <FontAwesome5 name="check" size={40} color="#008fd3" />
          <Text style={styles.Tests}>Approvals</Text>
          <Text style={styles.smallText}>Approve items anywhere, anytime</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Requests")}
          style={styles.Card}
        >
          <FontAwesome5 name="arrows-alt-h" size={40} color="#008fd3" />
          <Text style={styles.Tests}>Requests</Text>
          <Text style={styles.smallText}>Manage your authorisations</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DashBoard;
