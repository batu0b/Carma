import React, { useContext, useState } from "react";
import { SafeAreaView, View, Text, ScrollView,Image } from "react-native";
import { RegContext } from "../Context/RegContext";
import NextButton from "../Components/NextButton";
import { SpecialDatePicker } from "../Components/SpecialDatePicker";
import { useNavigation } from "@react-navigation/native";
import Progress from "../Components/Progress";

const DatePages = () => {
  const navigation = useNavigation();
  const { register, setRegister } = useContext(RegContext);
  const [myDate, setMyDate] = useState(register?.birthday);
  const [birthday, setBirthday] = useState();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#ffffff", paddingHorizontal: 15 }}
    >
      <ScrollView>
        <Progress loaded={birthday ? "50%" : "25%"} />
        <View
          style={{
            backgroundColor: "#1A1624",
            borderRadius: 20,
            paddingHorizontal: 20,
            height: 450,
            paddingTop: 80,
            marginTop: 50,
            paddingBottom: 25,
            position: "relative"
          }}
        >
              <Image style={{position: "absolute" , top: 20, left: 15}} source={require("../assets/images/Grp.png")} />
          <Text
            style={{
              marginTop: 20,
              fontSize: 24,
              textAlign: "center",
              fontWeight: "400",
              color: "#ffffff",
            }}
          >
            Doğum tarihin nedir?
          </Text>
          <SpecialDatePicker
            value={myDate}
            onPress={(timestamp) => {
              setMyDate(timestamp);
              setBirthday(timestamp);
              // contexte timestampi kaydet
            }}
          />
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <NextButton
              onPress={() => {
                {
                  navigation.navigate("CameraPages"),
                    setRegister({ ...register, birthday: myDate });
                }
              }}
              backgroundColor="#ffffff"
              disabled={birthday ? false : true}
              text={"Devam et"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DatePages;
