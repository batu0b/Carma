import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  View,
  ImageBackground,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import NextButton from "../Components/NextButton";
import { LinearGradient } from "expo-linear-gradient";
const WIDTH = Dimensions.get("screen").width;

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
    colors={["#EBE1FF", "transparent", "#eee"]}
    start={{ x: 0, y: 0.44 }}
    style={{
      flex: 1
    }}
  >
   
 
    
    <ScrollView
    style={{position: "relative"}}
    
    >
    
        <ImageBackground
          source={require("../assets/images/Yildiz.png")}
          resizeMode="cover"
          style={{
            width: WIDTH,
            height: 375,
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40%",
          }}
        >
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 36 }}
          >
            Ruh eşini keşfetmeye hazır mısın?
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "300",
              marginTop: 10,
              fontSize: 18,
            }}
          >
            Doğum haritanda gizlenen sırları keşfet, kadim bilgiye kulak ver!
          </Text>
        </ImageBackground>
        <NextButton
          text={"Giriş Yap"}
          color={"#ffffff"}
          onPress={() => navigation.navigate("CardWelcomeSignIn")}
          backgroundColor="#844AFF"
        />

        <TouchableOpacity onPress={() => navigation.navigate("RegisterRoot")}>
          <LinearGradient
            colors={["#0E091B", "#434343"]}
            start={{ x: 0.6, y: 1 }}
            style={{
              marginTop: 30,
              borderRadius: 10,
              height: 60,
              padding: 10,
              justifyContent: "center",
              alignItems: "center",

              marginLeft: 5,
              marginRight: 5,
            }}
          >
            <Text style={{ color: "#ffffff", fontWeight: "500", fontSize: 18 }}>
             Hesap Oluştur
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", marginTop: 7 }}>
          Devam ederek
          <Text style={{ color: "#6523F1" }}>
            {" "}
            Kullanım Koşullarımızı
          </Text> ve{" "}
          <Text style={{ color: "#6523F1" }}>Gizlilik Politikamızı</Text> kabul
          etmiş sayılırsınız.
        </Text>
    </ScrollView> 
    </LinearGradient>
  );
};
export default Welcome;
