import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SignInScreen</Text>
      <Button
        title="Main screens"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
