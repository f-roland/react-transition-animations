import React, { Component } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

export class TabBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Link to="/page/foo" style={styles.navItem} underlayColor="#4F96F8">
          <Text style={styles.text}> Page Foo </Text>
        </Link>
        <Link to="/page/bar" style={styles.navItem} underlayColor="#4F96F8">
          <Text style={styles.text}> Page bar </Text>
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#548BFB"
  },
  text: {
    color: "white"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  }
});
