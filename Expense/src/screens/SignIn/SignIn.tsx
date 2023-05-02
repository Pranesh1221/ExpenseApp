import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import React from "react";
import { styles } from "./SignInStyle";
import { useNavigation } from "@react-navigation/native";
import Login from "../Login/Login";
const Signin = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.mainbox]}>
      <Text style={[styles.text]}>Expense App</Text>
      <View>
        {/* <Image
          style={[styles.imagebox]}
          source={require("../../../assets/logo.png")}
        /> */}
      </View>

      <TouchableOpacity
        style={[styles.buttonContainer]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text
          style={[
            {
              textTransform: "uppercase",
              color: "#fafafa",
              fontWeight: "bold",
              fontSize: 18,
            },
          ]}
        >
          Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;
