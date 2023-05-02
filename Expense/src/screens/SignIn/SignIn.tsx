import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import React from "react";
import { styles } from "./SignInStyle";
import { useNavigation } from "@react-navigation/native";
const Signin = () => {
  const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate();
  };
  return (
    <View style={[styles.mainbox]}>
      <Text style={[styles.text]}>SAP Concur</Text>
      <View>
        <Image
          style={[styles.imagebox]}
          source={require("../../../assets/logo.png")}
        />
      </View>

      <TouchableOpacity style={[styles.buttonContainer]} onPress={goToLogin}>
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
