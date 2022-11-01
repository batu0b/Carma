import { View } from "react-native";
import React from "react";

export default function Progress({ loaded }) {
  return (
    <View
      style={{
        height: 14,
        width: "100%",
        backgroundColor: "#eeee",
        borderRadius: 10,
        borderWidth: 0.1
      }}
    >
      <View
        style={{
          height: "100%",
          width: loaded,
          backgroundColor: "purple",
          borderRadius: 9,
        }}
      />
    </View>
  );
}
