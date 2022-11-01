import React from "react";
import { Text, TouchableOpacity } from "react-native";

const NextButton = ({
  style,
  onPress,
  text,
  backgroundColor,
  color,
  disabled,
}) => {
  return (
    <TouchableOpacity
    disabled={disabled}
      style={[
        {
          backgroundColor: disabled ? "#7F7E7E" :  backgroundColor,
          marginTop: 30,
          borderRadius: 10,
          height: 60,
          justifyContent: "center",
          padding: 10,
          alignItems: "center",
          marginLeft: 5,
          marginRight: 5,
        },
        style,
      ]}
      onPress={onPress}
      text={text}
    >
      <Text style={{ color: color, fontSize: 18, fontWeight: "500" }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default NextButton;
