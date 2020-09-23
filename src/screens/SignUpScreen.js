import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
      <Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
