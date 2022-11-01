import React, { useContext, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import Camera from "../Components/Camera";
import { RegContext } from "../Context/RegContext";
import NextButton from "../Components/NextButton";
import { useNavigation } from "@react-navigation/native";
import Progress from "../Components/Progress";

const CameraPages = () => {
  const navigation = useNavigation();

  const { register, setRegister } = useContext(RegContext);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#ffffff", paddingHorizontal: 15 }}
    >
      <ScrollView>
        <Progress loaded={register.uri ? "75%" : "50%"} />
        <View
          style={{
            backgroundColor: "#1A1624",
            borderRadius: 20,
            paddingHorizontal: 20,
            height: 450,
            marginTop: 50,
            paddingTop: 80,
            paddingBottom: 25,
            position: "relative",
          }}
        >
          <Image
            style={{ position: "absolute", top: 20, left: 15 }}
            source={require("../assets/images/Grp.png")}
          />

          <Text
            style={{
              fontSize: 20,
              color: "#ffffff",
              textAlign: "center",
              fontWeight: "400",
            }}
          >
            Bir fotoğraf seçebilir misin?
          </Text>
          <Camera
            onChange={(item) => {
              setRegister({ ...register, uri: item.uri });
            }}
            value={register?.uri}
          />
          <NextButton
            disabled={false}
            onPress={() => navigation.navigate("Password")}
            backgroundColor="white"
            text="Devam Et"
            style={{ marginTop: 90 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CameraPages;
