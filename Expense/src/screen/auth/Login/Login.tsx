import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, ROUTES } from "../../../constants";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./LoginStyle";
import { useLayoutEffect } from "react";

const Login = (props) => {
  // const navigation = useNavigation();
  const { navigation } = props;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Login",
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
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
            {/* <Logo width={55} height={55} style={styles.mr7} /> */}
            <Text style={styles.brandName}>Expense</Text>
          </View>

          <Text style={styles.loginContinueTxt}>Login in to continue</Text>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />

          <View style={styles.loginBtnWrapper}>
            <LinearGradient
              colors={[COLORS.gradientForm, COLORS.primary]}
              style={styles.linearGradient}
              start={{ y: 0.0, x: 0.0 }}
              end={{ y: 1.0, x: 0.0 }}
            >
              {/******************** LOGIN BUTTON *********************/}
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                activeOpacity={0.7}
                style={styles.loginBtn}
              >
                <Text style={styles.loginText}>Log In</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          {/***************** FORGOT PASSWORD BUTTON *****************/}
          <TouchableOpacity
            onPress={() => navigation.navigate("Forgot Password")}
            style={styles.forgotPassBtn}
          >
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}> Don't have an account? </Text>
          {/******************** REGISTER BUTTON *********************/}
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.signupBtn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
