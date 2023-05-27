import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonsMain from "../components/buttons/ButtonMain";

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ButtonsMain
        text={"Press Me"}
        bgColor={"red"}
        bgColorPressed={"blue"}
        paddingLeft={20}
        paddingRight={20}
        paddinTop={20}
        paddingBottom={20}
        marginLeft={10}
        marginRight={10}
        marginTop={0}
        marginBottom={0}
        textColor={"#ffffcd"}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center"
  },
});
