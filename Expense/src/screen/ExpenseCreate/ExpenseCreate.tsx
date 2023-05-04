import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useCallback, useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";


import { Foundation, Ionicons } from "@expo/vector-icons";
import styles from "./ExpenseCreateStyle";

const ExpenseCreate = () => {
  const navigation = useNavigation();

  const handlePresentModel = () => {
    
  };
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
      tabBarVisible: false,
    });
  }, []);

  return (
    <View>
      <ScrollView>
       
          <TouchableOpacity
            onPress={handlePresentModel}
            style={[styles.AddReceiptButton]}
          >
            <View style={[styles.AddReceiptIcon]}>
              <Foundation name="page-add" size={45} color="white" />
              <Text style={[styles.AddReceiptText]}>Add Receipt</Text>
            </View>
          </TouchableOpacity>
      
        <View>
          <StatusBar style="auto" backgroundColor="#008fd3" />
          <View>
            <View style={[styles.amountBox]}>
              <Text style={[styles.amountTitle]}>Amount</Text>
              <TextInput
                style={[styles.amountField]}
                placeholder="$0.00"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={[styles.horizantalLine1]} />
          <View style={[styles.horizantalLine2]} />
          <View>
            <View style={styles.field1}>
              <Text style={[styles.fieldName1]}>Expense Type </Text>
              <Text style={[styles.requirdFeild1]}>Required Feild </Text>
            </View>

            <View style={[styles.horizantalLine3]} />
            <View style={styles.field2}>
              <Text style={[styles.dateFiled]}>Date</Text>
              <TextInput placeholder="May 05 2023" />
            </View>
            <View style={[styles.horizantalLine4]} />
          </View>
          <View style={[styles.optionBox]}>
            <Text style={[styles.optionfeild]}>OPTIONAL</Text>
          </View>
          <View style={[styles.horizantalLine5]} />
          <View>
            <Text style={[styles.locationFeild]}>Location</Text>
            <TextInput placeholder="" style={[styles.input]} />
          </View>
          <View>
            <Text style={[styles.suplierFeild]}>Supplier</Text>
            <TextInput placeholder="" style={[styles.input]} />
          </View>
          <View>
            <Text style={[styles.CommentFeild]}>Comment</Text>
            <TextInput placeholder="" style={[styles.input]} />
          </View>
          {/* <View>
            <Text style={[styles.CommentFeild]}>ID</Text>
            <TextInput    keyboardType="numeric" placeholder="" style={[styles.input]} />
          </View> */}
        </View>
        <TouchableOpacity style={[styles.buttonContainer]}>
          <Text
            style={[
              {
                textTransform: "uppercase",
                color: "#fafafa",
                fontWeight: "bold",
                fontSize: 18,
              },
            ]}
          >
            MOVE TO CLAIM
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default ExpenseCreate
