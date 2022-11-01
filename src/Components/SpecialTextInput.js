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
          backgroundColor: "white",
          justifyContent: "center",
          paddingHorizontal: 10,
          marginBottom: 10,
          borderRadius: 10,
          borderRadius: 10,
          borderColor: "purple",
          borderWidth: 1,
          height: 50,
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
