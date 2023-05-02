import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Expenselt from "../screens/Expenselt/Expenselt";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import ExpenseForm from "../screens/ExpenseForm/ExpenseForm";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "../screens/Dashboard/Dashboard";
import Login from "../screens/Login/Login";
import { User } from "../Modal/User";
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
            name="Expense App"
            component={BottomTabs}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
