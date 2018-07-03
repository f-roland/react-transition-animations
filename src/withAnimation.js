import React, { Component } from "react";
import { Animated, View } from "react-native";

export function withAnimation(Switch) {
  return class AnimatedSwitch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        previousChildren: null,
        locationKey: props.location.key
      };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      // console.log("animated - props", nextProps, this.props);
      if (nextProps.location.key !== prevState.locationKey) {
        console.log("page transition");
      }
      return prevState;
    }

    render() {
      // console.log("animated", this.props);

      return (
        <Animated.View style={{ flex: 1 }}>
          <Switch {...this.props} />
        </Animated.View>
      );
    }
  };
}
