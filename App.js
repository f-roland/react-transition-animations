import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";

import { NavBar } from "./src/NavBar";
import { TabBar } from "./src/Tabs";
import { Parent } from "./src/Parent";

const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <Route path="/:page?/:page_id?" component={NavBar} />
      <Route path="/" children={routeProps => <Parent {...routeProps} />} />
      <TabBar />
    </View>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
