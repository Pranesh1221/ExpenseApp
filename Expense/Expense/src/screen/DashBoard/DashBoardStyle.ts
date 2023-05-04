import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  Main: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
    padding: 20,
  },
  Card: {
    flex: 1,
    height: 150,
    width: 80,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  Box: {
    flex: 0.7,
  },
  Tests: {
    fontSize: 18,
    fontWeight: "bold",
  },
  smallText: {
    fontSize: 10,
    width: "80%",
    textAlign: "center",
  },
});
export { styles };
