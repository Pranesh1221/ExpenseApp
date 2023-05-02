import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from "./SigninStyle"
const Signin = () => {
    return (
        <View style={[styles.mainbox]}>
            <Text style={[styles.text]}>SAP Concur</Text>
            <View>

                <Image style={[styles.imagebox]} source={require("../../../assets/logo.png")} />
            </View>
            <TouchableOpacity

                style={[styles.buttonContainer]}
            >
                <Text
                    style={[
                        {
                            textTransform: 'uppercase',
                            color: '#fafafa',
                            fontWeight: 'bold',
                            fontSize: 18,
                        },
                    ]}
                >
                    Sign in
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Signin

