import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";
import firebase from "firebase/app";
import { LinearGradient } from "expo-linear-gradient";
import { LoaderContext } from "../Context/LoaderContext";
import Birthday from "../Components/BirthDay";
import NextButton from "../Components/NextButton";

const PopUp = ({ visible, user, onClose, onSend }) => {
  const send = () => {
    firebase
      .firestore()
      .collection(firebase.auth().currentUser.uid + "/")
      .add({ ...user })
      .finally(() => {
        onSend();
        onClose();
      });
  };

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            paddingHorizontal: 15,
            paddingTop: 50,
            justifyContent: "center",
            backgroundColor: "#ffffff",
            borderRadius: 10,
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginHorizontal: 20,
            }}
          >
            {user.name} adlı kullanıcıya istek göndermek istediğine emin misin?
          </Text>
          <NextButton
            text="Gönder"
            color="#ffffff"
            onPress={() => send()}
            background="#844AFF"
            style={{
              marginTop: 25,
              marginRight: 14,
              marginLeft: 15,
              backgroundColor: "#844AFF",
            }}
          />
          <NextButton
            text="Vazgeç"
            onPress={onClose}
            color="#464646"
            style={{
              marginTop: 5,
              marginRight: 14,
              marginLeft: 15,
              marginBottom: 18,
              backgroundColor: "#ffffff",
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const MapItem = ({ item, onSend }) => {
  const [uri, setUri] = useState();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const storageRef = firebase.storage().ref();
    const LikeRef = storageRef.child("avatar/" + item.uid);
    LikeRef.getDownloadURL().then((uri) => setUri(uri));
  }, []);

  return (
    <View
      style={{
        width: "45%",
        height: 180,
        marginVertical: 10,
      }}
    >
      <TouchableOpacity onPress={() => setVisible(true)}>
        {uri && (
          <ImageBackground
            source={{ uri: uri }}
            resizeMode="cover"
            imageStyle={{ borderRadius: 5 }}
            style={{
              height: 180,
            }}
          >
            <LinearGradient
              colors={["transparent", "transparent", "#D6052B"]}
              start={{ x: 0.75, y: 0.075 }}
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
                  fontWeight: "700"
                }}
              >
                {item.name}
              </Text>
              <Birthday timestamp={item.birthday} />
            </LinearGradient>
          </ImageBackground>
        )}
      </TouchableOpacity>

      <PopUp
        onClose={() => {
          setVisible(false);
        }}
        visible={visible}
        user={item}
        onSend={onSend}
      />
    </View>
  );
};

export const HomeScreen = () => {
  const [users, setUsers] = useState();
  const { setLoader } = useContext(LoaderContext);
  const getAllUsers = () => {
    setLoader(true);
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((querySnapshot) => {
        const currentUser = [];
        querySnapshot.forEach((doc) => {
          const { name, birthday, uid } = doc.data();
          currentUser.push({
            name,
            birthday,
            uid,
          });
        });
        firebase
          .firestore()
          .collection(firebase.auth().currentUser.uid + "/")
          .onSnapshot((querySnapshot) => {
            const userUid = firebase.auth().currentUser.uid;
            const likedUsers = [userUid];
            querySnapshot.forEach((doc) => {
              const { uid } = doc.data();
              likedUsers.push(uid);
            });
            const shownUser = currentUser.filter(
              (first) => !likedUsers.includes(first.uid)
            );
            setUsers(shownUser);
            setLoader(false);
          });
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ paddingHorizontal: 15, flex: 1, backgroundColor: "#F5F5F5" }}
      >
        <FlatList
          style={{ marginTop: 22.5 }}
          data={users}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => (
            <MapItem item={item} onSend={getAllUsers} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
