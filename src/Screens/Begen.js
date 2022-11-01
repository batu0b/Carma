import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { LoaderContext } from "../Context/LoaderContext";
import firebase from "firebase/app";
import { LinearGradient } from "expo-linear-gradient";
import Birthday from "../Components/BirthDay";

const BegenUsers = ({ item }) => {
  const [uri, setUri] = useState();

  useEffect(() => {
    debugger;
    const storageRef = firebase.storage().ref();
    const LikeRef = storageRef.child("avatar/" + item.uid);
    LikeRef.getDownloadURL().then((uri) => setUri(uri));
  }, []);
  return (
    <View
      style={{
        marginVertical: 10,
        height: 180,
        width: "45%",
      }}
    >
      {uri && (
        <ImageBackground
          source={{ uri: uri }}
          resizeMode="cover"
          imageStyle={{ borderRadius: 5 }}
          style={{
            marginTop: 22.5 ,
            height: 180,
            alignItems: "flex-start",
            justifyContent: "flex-end",
          }}
        >
          <LinearGradient
            colors={["transparent", "transparent", "#D6052B"]}
            start={{ x: 0.5, y: 0.2 }}
            style={{
              borderRadius: 5,
              flex: 1,
              padding: 10,
              alignContent: "flex-start",
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                color: "#ffffff",
              }}
            >
              {item.name}
            </Text>
            <Birthday timestamp={item.birthday} />
          </LinearGradient>
        </ImageBackground>
      )}
    </View>
  );
};

const Begen = () => {
  const [users, setUsers] = useState();

  const { setLoader } = useContext(LoaderContext);

  useEffect(() => {
    setLoader(true);
    firebase
      .firestore()
      .collection(firebase.auth().currentUser.uid)
      .onSnapshot((querySnapshot) => {
        const currentUser = [];
        querySnapshot.forEach((doc) => {
          currentUser.push({
            ...doc.data(),
          });

        });
        setUsers(currentUser);
        setLoader(false);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        {users && (
          <FlatList
            data={users}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            numColumns={2}
            renderItem={({ item }) => <BegenUsers item={item} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Begen;
