import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",

    alignItems: "center",

    justifyContent: "center",
  },

  floatingButton: {
    position: "absolute",

    bottom: 20,

    right: 20,

    width: 60,

    height: 60,

    borderRadius: 30,

    backgroundColor: "#008fd3",

    alignItems: "center",

    justifyContent: "center",
  },

  buttonText: {
    fontSize: 24,

    color: "#fff",
  },

  modalBackground: {
    flex: 1,

    backgroundColor: "rgba(0, 0, 0, 0.5)",

    alignItems: "center",

    justifyContent: "center",
  },

  modalContent: {
    backgroundColor: "#fff",

    padding: 20,

    borderRadius: 10,
  },

  modalOption: {
    flexDirection: "row",

    alignItems: "center",

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: "#ccc",
  },

  modalOptionText: {
    marginLeft: 10,

    fontSize: 18,

    color: "#333",
  },

  secondmodalBackground: {
    flex: 1, // width: "100%", // alignItems: "center", // justifyContent: "center",

    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  secondmodalContent: {
    backgroundColor: "#fff",

    padding: 20,

    width: "100%",

    height: "25%",
  },
});

export default styles;
