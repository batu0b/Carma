import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./src/Context/AuthContext";
import { LoaderProvider } from "./src/Context/LoaderContext";
import { RegisterProvider } from "./src/Context/RegContext";
import Main from "./src/Routes";
import CameraPages from "./src/Screens/CameraPages";
import CardWelcomeSignIn from "./src/Screens/CardWelcomeSignIn";
import DatePages from "./src/Screens/DatePages";
import Password from "./src/Screens/Password";
import Welcome from "./src/Screens/Welcome";

export default function App() {
  return (
    <LoaderProvider>
      <AuthProvider>
        <RegisterProvider>
          <View style={{ flex: 1 }}>
            <Main />
          </View>
        </RegisterProvider>
      </AuthProvider>
    </LoaderProvider>
  );
}
