import React, { Component } from "react";
import { Animated } from "react-native";

export class AnimatedChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRouteKey: props.currentRouteKey,
      currentChild: props.children,
      nextRouteKey: null,
      nextChildren: null,
      animating: false
    };
  }

  static getDerivedStateFromProps(nextProps, previousState) {
    // figure out what to do with the children
    const navigating =
      nextProps.currentRouteKey && !previousState.currentRouteKey;
    // const animationEnded = this.props.animating && !nextProps.animating;

    if (navigating) {
      console.log("animate");
      // we were rendering, but now we're heading back up to the parent,
      // so we need to save the children (har har) so we can render them
      // while the animation is playing
      return {
        ...previousState,
        nextRouteKey: nextProps.currentRouteKey,
        nextChildren: nextProps.children,
        animating: true
      };
    }
    console.log("not animating");
    return previousState;
  }

  render() {
    const { children } = this.props;
    const { previousChildren } = this.state;
    const anim = new Animated.Value(0);
    return (
      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: anim.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 0]
          }),
          opacity: anim.interpolate({
            inputRange: [0, 0.75],
            outputRange: [0, 1]
          })
        }}
      >
        {/* render the old ones if we have them */}
        {previousChildren || children}
      </Animated.View>
    );
  }
}
