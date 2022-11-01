import { Text, View } from "react-native";
import React from "react";

const Birthday = ({ timestamp }) => {
  const getBirthDate = () => {
    const currentDate = new Date(timestamp);
    return (
      currentDate.getDate() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getFullYear()
    );
  };
  return (
    <View>
      <Text
        style={{
          color: "#ffffff",
        }}
      >
        {getBirthDate()}
      </Text>
    </View>
  );
};

export default Birthday;