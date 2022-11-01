import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  loaderWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const LoaderModal = ({ ...props }) => (
  <Modal transparent {...props}>
    <View style={styles.loaderWrap}>
      <ActivityIndicator color="#844AFF" size="large" />
    </View>
  </Modal>
);
