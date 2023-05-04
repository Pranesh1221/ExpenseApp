import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  AddReceiptButton: {
    height: 250,
    backgroundColor: "#008fd3",
  },
  AddReceiptIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  AddReceiptText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  amountBox: {
    width: 100,
    marginTop: 15,
    marginLeft: 20,
  },
  amountTitle: {
    fontSize: 16,
  },
  amountField: {
    color: "#008fd3",
    placeholderTextColor: "#008fd3",
    fontSize: 30,
    fontWeight: "bold",
  },
  horizantalLine1: {
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  horizantalLine2: {
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,

    marginTop: 10,
  },
  horizantalLine3: {
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,

    marginTop: 20,
    width: 390,
    marginLeft: 10,
  },
  horizantalLine4: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  horizantalLine5: {
    borderColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 6,
  },

  field1: {
    marginLeft: 13,
    marginTop: 20,
  },
  requirdFeild1: {
    color: "red",
    fontSize: 18,
  },
  fieldName1: {
    fontSize: 18,
  },
  field2: {
    marginLeft: 13,
    marginTop: 18,
    marginBottom: 3,
  },
  dateFiled: {
    fontSize: 18,
  },
  optionBox: {
    marginTop: 1,
    height: 35,
    backgroundColor: "#e3e3e3",
  },
  optionfeild: {
    color: "#008fd3",
    fontSize: 18,
    marginTop: 5,
    marginLeft: 10,
  },
  locationFeild: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 14,
  },
  suplierFeild: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
  },
  CommentFeild: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
  },
  input: {
    padding: 10,
    borderRadius: 8,
    borderBottomColor: "gray",

    flex: 1,
    marginVertical: 8,
    borderBottomWidth: 1,
    width: "94%",
    marginLeft: 15,
    marginTop: -10,
  },
  buttonContainer: {
    width: "100%",
    padding: 8,
    backgroundColor: "#737575",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default styles;
