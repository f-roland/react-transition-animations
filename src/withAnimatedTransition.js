import React, { Component } from "react";
import { Animated, View } from "react-native";
import R from "ramda";

const initialState = props => ({
  currentElement: props.element,
  nextElement: null,
  animatedValue: new Animated.Value(0)
});

export function withAnimatedTransition(Children) {
  return class AnimatedTransition extends Component {
    state = initialState(this.props);


    componentDidUpdate(props, state) {
      if (!R.equals(props.children))
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
