import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashBoard from "../screen/DashBoard/DashBoard";
import Expenselt from "../screen/Expenselt/Expenselt";
import ExpenseCreate from "../screen/ExpenseCreate/ExpenseCreate";
import { Entypo, Ionicons } from "@expo/vector-icons";
import DrawerNavigation from "./DrawerNavigation";
import { COLORS } from "../constants";

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
       
        headerShown: false,
        tabBarInactiveTintColor: "white",
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
        component={DrawerNavigation}
        options={{
          tabBarLabel: "Home",
          tabBarActiveTintColor: "white",
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
          tabBarActiveTintColor: "white",
          tabBarIcon: ({ color }) => (
            <Ionicons name="camera" size={24} color={"white"} />
          ),
        }}
      />
      <Tab.Screen
        name="ExpenseCreate"
        component={ExpenseCreate}
        options={{
          tabBarLabel: "Create",
          tabBarActiveTintColor: "white",
          tabBarIcon: ({ color }) => (
            <Entypo name="plus" size={24} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
