import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default function Form() {
  return (
    <View style={style.container}>
      <StatusBar />
      {/* Code Here */}

      <Text style={style.header}>SignIn</Text>

      <Text style={style.labelText}>Email</Text>
      <TextInput style={style.textInput} placeholder="email" />

      <Text style={style.labelText}>Password</Text>
      <TextInput style={style.textInput} secureTextEntry={true} placeholder="password" />

      <TouchableOpacity style={style.button}>
        <Text style={style.textButton}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

// Create Variable for CSS
const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  header: {
    color: 'orange',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50
  },
  labelText: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    color: 'grey',
    padding: 10,
    borderColor: 'grey'
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'orange',
    height: 40,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center'
  }
})
