import { StyleSheet, Text, View } from "react-native";
import StackNavigation from "./src/Navigation/StackNavigation";
import Login from "./src/screens/Login/Login";
import Signin from "./src/screens/SignIn/SignIn";

export default function App() {
  return (
    <>
      <StackNavigation />
    </>
  );
}

const styles = StyleSheet.create({});
