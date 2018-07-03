import React, { Component } from "react";
import { View } from "react-native";
import { Switch, Route, Redirect } from "react-router-native";
import { AnimatedChild } from "./AnimatedChild";
import { Page } from "./Page";
// import { withAnimation } from "./withAnimation";

// const AnimatedSwitch = withAnimation(Switch);

export class Parent extends Component {
  render() {
    // console.log("parent props", this.props);
    return (
      <View style={{ flex: 1 }}>
        {/* <AnimatedChild currentRouteKey={this.props.location.key}> */}
        <Switch location={this.props.location}>
          <Route path="/page/:page_id" component={Page} />
          <Redirect to="/page/foo" />
        </Switch>
        {/* </AnimatedChild> */}
      </View>
    );
  }
}
