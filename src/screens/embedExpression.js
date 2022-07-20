import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

export default function EmbedExpression() {
  // Create Function Here

  function getBatch() {
    return "Batch 36"
  }

  // Create a variable Here
  const name = "Samsul Rijal"

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <Text>Hallo {name} selamat datang di {getBatch()}</Text>
    </View>
  );
}
