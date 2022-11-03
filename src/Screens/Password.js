import React, { useContext, useState, useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import SpecialTextInput from "../Components/SpecialTextInput";
import NextButton from "../Components/NextButton";
import { useNavigation } from "@react-navigation/native";
import Progress from "../Components/Progress";
import { RegContext } from "../Context/RegContext";
import firebase from "firebase/app";
import { AuthContext } from "../Context/AuthContext";
import { LoaderContext } from "../Context/LoaderContext";

const Password = () => {
  const [err, setErr] = useState("");
  const [approve, setApprove] = useState(false);
  const [password, setPassword] = useState("");
  const { register, setRegister } = useContext(RegContext);
  const { setAuth, setUser } = useContext(AuthContext);
  const { setLoader } = useContext(LoaderContext);

  const navigation = useNavigation();

  const imgUpload = async (id) => {
    if (register.uri == null) return;
    const response = await fetch(register.uri);
    const blop = await response.blob();
    firebase.storage().ref(`avatar/${id}`).g;
    firebase
      .storage()
      .ref(`avatar/${id}`)
      .put(blop, { contentType: "image/jpeg" })
      .then((snapshot) =>
        snapshot.ref.getDownloadURL().then((url) => {
          console.log("downloadURL", url);
        })
      )
      .catch((e) => {
        console.log(e);
      });
  };

  const approvedUser = () => {
    setLoader(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(register.name, password)
      .then((item) => {
        setUser({ uid: item.user.uid });
        const uid = item.user.uid;
        firebase
          .firestore()
          .doc("users/" + uid)
          .set({ ...register, uid: uid });
        imgUpload(uid).then(() => setAuth(true));
        setLoader(false);
      });
  };
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#ffffff", paddingHorizontal: 15 }}
      >
        <ScrollView>
          <Progress style={{}} loaded={"100%"} />

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
                textAlign: "center",
                fontWeight: "400",
                color: "#ffffff",
                fontSize: 20,
              }}
            >
              En az 6 karakterden oluşan bir parola girmelisin
            </Text>
            <SpecialTextInput
              style={{ marginTop: 60 }}
              secureTextEntry={true}
              placeholder="Parola"
              onChangeText={(e) => setPassword(e)}
            />
            <View style={{ flex: 1, flexDirection: "row" }}>
              {approve ? (
                <Ionicons
                  name="checkbox-outline"
                  size={24}
                  color="#ffffff"
                  onPress={() => setApprove(false)}
                  style={{ marginTop: 32, marginEnd: 4 }}
                />
              ) : (
                <MaterialIcons
                  style={{ marginTop: 32, marginEnd: 4 }}
                  name="check-box-outline-blank"
                  size={24}
                  color="#ffffff"
                  onPress={() => setApprove(true)}
                />
              )}
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "300",
                  color: "#ffffff",
                  marginTop: 30,
                }}
              >
                Kullanım Koşulları, Gizlilik Politikası ve KVKK Metnini okudum
                onaylıyorum.
              </Text>
              <Text style={{ color: "red", textAlign: "center", fontSize: 17 }}>
                {err}
              </Text>
            </View>
            <NextButton
              disabled={!approve || password?.length < 6}
              onPress={() => approvedUser()}
              backgroundColor={"#ffffff"}
              text="Tamamla"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Password;
