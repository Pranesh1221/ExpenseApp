
import { StyleSheet, Text, View } from 'react-native';
import * as React from "react"
import { useState } from "react"
import { User } from "./src/model/User"

import Login from './src/screens/Login/Login';
import Signin from './src/screens/Signin/Signin';

export default function App() {
  const [email, setEmail] = useState("")
  console.log(email)
  return (
    email ?

      (<Signin />) :


      (<Login onLogin={(user: User) => setEmail(user.email)} />)




  )




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
