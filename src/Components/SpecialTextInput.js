import React from "react";
import { TextInput } from "react-native";

const SpecialTextInput = ({
  style,
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
  inputType
}) => {
  return (
    <TextInput
      style={[
        {
          height: 50,
          backgroundColor: "#ffffff",
          justifyContent: "center",
          paddingHorizontal: 10,
          borderColor: "#957DC7",
          borderWidth: 1,
          marginBottom: 10,
          borderRadius: 10,
          borderRadius: 10,
        },
        style,
      ]}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor={"#808080"}
      placeholder={placeholder}
      textContentType = {inputType}
    ></TextInput>
  );
};

export default SpecialTextInput;
