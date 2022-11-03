import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import NextButton from "../Components/NextButton";
import Progress from "../Components/Progress";
import SpecialTextInput from "../Components/SpecialTextInput";
import { RegContext } from "../Context/RegContext";

const CardWelcome = () => {
  const navigation = useNavigation();
  const { register, setRegister } = useContext(RegContext);
  const [name, setName] = useState(register?.name || "");
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#ffffff", paddingHorizontal: 15 }}
    >
      <ScrollView>
        <Progress loaded={"0%"} />
        <View
          style={{
            backgroundColor: "#1A1624",
            borderRadius: 20,
            paddingHorizontal: 20,
            height: 450,
            paddingTop: 80,
            paddingBottom: 25,
            marginTop: 50,
            position: "relative",
          }}
        >
          <Image style={{position: "absolute" , top: 20, left: 15}} source={require("../assets/images/Grp.png")} />
          <Text
            style={[
              {
                textAlign: "center",
                fontWeight: "400",
                color: "#ffffff",
                fontSize: 27,
              },
            ]}
          >
            Karma’ya hoşgeldin!
          </Text>
          <Text
            style={[
              {
                textAlign: "center",
                fontWeight: "200",
                color: "#ffffff",
                fontSize: 18,
              },
            ]}
          >
            Sana nasıl hitap edelim?
          </Text>
          <SpecialTextInput
            value={name}
            onChangeText={(e) => setName(e)}
            style={{ marginTop: 80 }}
            placeholder={"kullanıcı adı"}
          />
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <NextButton
              onPress={() => {
                {
                  setRegister({ ...register, name: name });
                  navigation.navigate("DatePages");
                }
              }}
              backgroundColor="#ffffff"
              text={"Devam Et"}
              disabled={name?.length <= 4}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardWelcome;
