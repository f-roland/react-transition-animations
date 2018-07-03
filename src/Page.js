import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export class Page extends Component {
  render() {
    const {
      match: {
        params: { page_id }
      }
    } = this.props;
    return (
      <View style={styles.container}>
        <Text>I'm a page - {page_id || "with no id"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F8F8"
  }
});
