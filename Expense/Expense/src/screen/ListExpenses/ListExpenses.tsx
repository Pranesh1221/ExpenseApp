import { TouchableOpacity, StyleSheet, Text, View, Modal } from "react-native";

import React, { useLayoutEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";

import {
  AntDesign,
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import styles from "./ListExpensesStyle";


const ListExpenses = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,

      title: "Expenses",

      headerTitleStyle: {
        fontSize: 20,

        fontWeight: "bold",

        color: "white",
      },

      headerStyle: {
        backgroundColor: "#008fd3",
      },
    });
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalOutSide, setModalOutSide] = useState(false); // const handleOptionClick = (option) => { //   if (option === 1) { //     setModalVisible(false); //   } else { //     setModalVisible(false); //   } // }; // const toggleModal = () => { //   setModalOutSide(!modalOutSide); //   setModalVisible(false); // };

  const handleModal = () => {
    setModalOutSide(true);

    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
     {/* Your app content */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.floatingButton}
      ><Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalOption} onPress={handleModal}>
          <Ionicons name="camera" size={25} color="#008fd3" />
           
              <Text style={styles.modalOptionText}>Add Expenselt</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption} // onPress={() => handleOptionClick(2)}
            >
            <Ionicons name="create" size={25} color="#008fd3" />
            
              <Text style={styles.modalOptionText}>Add Quick Expense</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption} // onPress={() => handleOptionClick(3)}
            >
              <MaterialIcons name="upload-file" size={24} color="#008fd3" />
              <Text style={styles.modalOptionText}>Upload Receipt</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
      <Modal
        visible={modalOutSide}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalOutSide(false)}
      >
        <TouchableOpacity
          style={styles.secondmodalBackground}
          onPress={() => setModalOutSide(false)}
        >
          <View style={styles.secondmodalContent}>
            <TouchableOpacity style={styles.modalOption}>
             <Entypo name="camera" size={24} color="#008fd3" />
              <Text style={styles.modalOptionText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption}>
              <FontAwesome name="picture-o" size={24} color="#008fd3" />
              <Text style={styles.modalOptionText}>Upload Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption}>
              <AntDesign name="arrowup" size={24} color="#008fd3" />
              <Text style={styles.modalOptionText}>Upload File</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ListExpenses;
