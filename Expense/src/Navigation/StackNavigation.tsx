import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Expenselt from "../screens/Expenselt/Expenselt";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import ExpenseForm from "../screens/ExpenseForm/ExpenseForm";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "../screens/Dashboard/Dashboard";

import { User } from "../Modal/User";
import Signin from "../screens/SignIn/SignIn";
import Login from "../screens/Login/Login";
import ListExpenses from "../screens/ListExpenses/ListExpenses";
import ReviewExpenses from "../screens/ReviewExpenses/ReviewExpenses";
import ApprovalExpenses from "../screens/ApprovalExpenses/ApprovalExpenses";
import Request from "../screens/Request/Request";
const StackNavigation = () => {
  const [email, setEmail] = useState("");
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: [
            {
              backgroundColor: "#008fd3",
            },
            null,
          ],
        })}
      >
        <Tab.Screen
          name="Expense App"
          component={Dashboard}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={"white"} />
            ),
          }}
        />
        <Tab.Screen
          name="Expenselt"
          component={Expenselt}
          options={{
            tabBarLabel: "Expenselt",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="camera" size={24} color={"white"} />
            ),
          }}
        />
        <Tab.Screen
          name="Expense"
          component={ExpenseForm}
          options={{
            tabBarLabel: "Create",
            headerShown: true,
            tabBarIcon: ({ color }) => (
              <Entypo name="plus" size={24} color="white" />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={Signin}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Expense App"
            component={BottomTabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Expenses"
            component={ListExpenses}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="Claims"
            component={ReviewExpenses}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="Approvals"
            component={ApprovalExpenses}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="Requests"
            component={Request}
            options={{
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
