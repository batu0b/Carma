import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../Screens/Welcome";
import CardWelcome from "../Screens/CardWelcome";
import Password from "../Screens/Password";
import { HomeScreen } from "../Screens/Home";
import CameraPages from "../Screens/CameraPages";
import DatePages from "../Screens/DatePages";
import CardWelcomeSignIn from "../Screens/CardWelcomeSignIn";
import { AuthContext } from "../Context/AuthContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import firebaseConfig from "../Firebase/firebaseConfig";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import Begen from "../Screens/Begen";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const Stack = createNativeStackNavigator();

export function RegisterRoot() {
  return (
    <Stack.Navigator
      screenOptions={{ title: "Kayıt Ol", headerTitleAlign: "center" }}
    >
      <Stack.Screen name="CardWelcome" component={CardWelcome} />
      <Stack.Screen name="DatePages" component={DatePages} />
      <Stack.Screen name="CameraPages" component={CameraPages} />
      <Stack.Screen name="Password" component={Password} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#ffffff",
        tabBarActiveBackgroundColor: "#844AFF",
        tabBarInactiveBackgroundColor: "#E8E8E8",
        headerShown: false,
        tabBarIconStyle: { display: "none" },
        tabBarItemStyle: {
          margin: 5,
          borderRadius: 10,
          justifyContent: "center",
        },
        tabBarLabelStyle: {
          fontSize: 16,
        },
      })}
    >
      <Tab.Screen
        options={{ title: "Kullanıcılar" }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ title: "Beğenenler" }}
        name="Likes"
        component={Begen}
      />
    </Tab.Navigator>
  );
}

export default function Main() {
  const { isAuth } = React.useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, headerTitleAlign: "center" }}
      >
        {isAuth ? (
          <Stack.Screen name="Authenticated" component={Tabs} />
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="RegisterRoot" component={RegisterRoot} />
            <Stack.Screen
              options={{ headerShown: true, title: "Giriş Yap" }}
              name="CardWelcomeSignIn"
              component={CardWelcomeSignIn}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
