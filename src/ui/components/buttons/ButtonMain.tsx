import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const ButtonsMain: React.FC<ButtonInterface> = ({
  text,
  bgColor,
  bgColorPressed,
  paddingLeft,
  paddingRight,
  paddingBottom,
  paddinTop,
  marginLeft,
  marginRight,
  marginBottom,
  marginTop,
  textColor
}) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? bgColorPressed : bgColor,
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,
            paddingBottom: paddingBottom,
            paddingTop: paddinTop,
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginBottom: marginBottom,
            alignItems: "center"
          },
        ]}
      >
        <Text style={{color: textColor}}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default ButtonsMain;

const styles = StyleSheet.create({});
