import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export default function Event() {
  // Create Function Here

  function Hallo(){
    return alert("Hallo Dumbways")
  }

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <TouchableOpacity onPress={Hallo}>
        Click Hallo
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => alert("Batch 36")}>
        Click Me
      </TouchableOpacity>


    </View>
  );
}
