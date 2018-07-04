import React, { Component } from "react";
import { Animated, StyleSheet, View, Text } from "react-native";
import { AnimatedChild } from "./AnimatedChild";

const Label = ({ textValue }) => <Text style={styles.text}>{textValue}</Text>;

export class NavBar extends Component {
  render() {
    const currentStyles = animatedValue => ({
      opacity: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
      }),
      transform: [
        {
          translateX: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -150]
          })
        }
      ]
    });

    const nextStyles = animatedValue => ({
      opacity: animatedValue,
      transform: [
        {
          translateX: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [150, -10]
          })
        }
      ]
    });

    const animationConfig = {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    };

    const animatedChildProps = {
      animationType: "timing",
      animationConfig,
      currentStyles,
      nextStyles,
      initialAnimatedValue: 0,
      containerStyles: { flexDirection: "row" }
    };

    const textValue = this.props.match.params.page_id || "header";

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <AnimatedChild {...animatedChildProps}>
            <Label textValue={textValue} />
          </AnimatedChild>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    paddingTop: 20,
    backgroundColor: "#27DA86"
  },
  header: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white"
  },
  navItems: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  }
});
