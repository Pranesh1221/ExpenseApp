import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DashBoard from "../screen/DashBoard/DashBoard";
import { ROUTES } from "../constants";
import Login from "../screen/auth/Login/Login";
import Register from "../screen/auth/Register/Register";
import ForgetPassword from "../screen/auth/Forget Password/ForgetPassword";
import Signin from "../screen/auth/Signin/SignIn";
import BottomTabNavigator from "./BottomTabNavigator";
import DrawerNavigation from "./DrawerNavigation";
import RequestExpense from "../screen/Requests/RequestExpense";
import Approvals from "../screen/Approvals/Approvals";
import ReviewExpense from "../screen/ReviewExpense/ReviewExpense";
import ListExpense from "../screen/ListExpenses/ListExpenses";
const Stack = createStackNavigator();
// This Stack Contains Navigator,Screen,Group
const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen name="Signin" component={Signin}  options={{
          headerShown: false,
        }}/>
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Forgot Password" component={ForgetPassword} />
      <Stack.Screen name="Register" component={Register} />

      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
            name="Expenses"
            component={ListExpense}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Claims"
            component={ReviewExpense}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="Approvals"
            component={Approvals}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="Requests"
            component={RequestExpense}
            options={{
              headerShown: true,
            }}
          />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
