import React, { Component } from "react";
import { Animated, View } from "react-native";
import R from "ramda";

const initialState = props => ({
  currentChildren: props.children,
  nextChildren: null,
  animatedValue: new Animated.Value(props.initialAnimatedValue || 0)
});

export class AnimatedChild extends Component {
  constructor(props) {
    super(props);
    this.animationEnded = this.animationEnded.bind(this);
    this.state = initialState(props);
  }

  childHasChanged(prevProps, currentProps) {
    return prevProps.children !== currentProps.children;
  }

  componentDidUpdate(prevProps) {
    if (this.childHasChanged(prevProps, this.props)) {
      this.setState(
        R.merge(R.__, {
          nextChildren: this.props.children
        }),
        this.animate
      );
    }
  }

  animate() {
    const { animationType = "timing", animationConfig } = this.props;
    Animated[animationType](this.state.animatedValue, animationConfig).start(
      ({ finished }) => {
        this.animationEnded();
      }
    );
  }

  animationEnded() {
    this.setState(initialState(this.props));
  }

  render() {
    const { currentStyles, nextStyles, containerStyles } = this.props;
    const { currentChildren, nextChildren, animatedValue } = this.state;

    return (
      <View style={containerStyles}>
        <Animated.View style={currentStyles(animatedValue)}>
          {currentChildren}
        </Animated.View>
        {nextChildren && (
          <Animated.View style={nextStyles(animatedValue)}>
            {nextChildren}
          </Animated.View>
        )}
      </View>
    );
  }
}
