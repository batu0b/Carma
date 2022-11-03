import React, { useContext, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import NextButton from "../Components/NextButton";
import SpecialTextInput from "../Components/SpecialTextInput";
import { AuthContext } from "../Context/AuthContext";
import { LoaderContext } from "../Context/LoaderContext";
import firebase from "firebase/app";

const CardWelcomeSignIn = () => {
  const [err, setErr] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLoader } = useContext(LoaderContext);
  const { setAuth, setUser } = useContext(AuthContext);
  const signIn = async () => {
    setLoader(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((item) => {
        setUser({ uid: item.user.uid });
        setAuth(true);
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false)
        console.log(error);
        setErr("Hatalı Kullanıcı Adı Ya Da Parola");
      });
  };

  return (
    <SafeAreaView style={{ justifyContent: "center", flex: 1 }}>
      <View
        style={{
          marginHorizontal: 15,
          backgroundColor: "#1A1624",
          borderRadius: 20,
          paddingHorizontal: 20,
          height: 450,
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
            color: "#ffffff",
            textAlign: "center",
            fontWeight: "270",
            fontSize: 27,
          }}
        >
          <Text style={{ fontWeight: "600" }}>Karma’ya </Text>hoşgeldin!
        </Text>
        <Text
          style={{
            color: "#ffffff",
            textAlign: "center",
            fontWeight: "100",
            fontSize: 18,
          }}
        >
          Haydi maceraya başlayalım!
        </Text>
        <View style={{ flex: 2, justifyContent: "center" }}>
          <SpecialTextInput
            value={email}
            onChangeText={(e) => setEmail(e)}
            placeholder={"kullanıcı adı"}
          />
          <SpecialTextInput
            value={password}
            onChangeText={(e) => setPassword(e)}
            placeholder={"parola"}
            secureTextEntry={true}
          />
        </View>
        <Text style={{ color: "red", textAlign: "center", fontSize: 17 }}>
          {err}
        </Text>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <NextButton
            text="Giriş Yap"
            style={{ backgroundColor: "#ffffff" }}
            onPress={() => {
              signIn();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CardWelcomeSignIn;
