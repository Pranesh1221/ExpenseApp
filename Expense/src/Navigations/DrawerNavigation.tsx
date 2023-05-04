import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import { COLORS } from "../constants";
import DashBoard from "../screen/DashBoard/DashBoard";
import Settings from "../screen/Settings/Settings";
import Help from "../screen/Help/Help";
import SignOut from "../screen/SignOut/SignOut";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      initialRouteName="DashBoard"
      screenOptions={{
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        // drawerInactiveBackgroundColor:COLORS.primary,
        // drawerInactiveTintColor:COLORS.white,
      }}
    >
      <Drawer.Screen
        name="Expense"
        component={DashBoard}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={"white"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color="white" />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={Help}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="ios-help-buoy" size={24} color="white" />
          ),
        }}
      />
      <Drawer.Screen
        name="SignOut"
        component={SignOut}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="sign-out-alt" size={24} color="white" />
          ),
        }}
      />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
