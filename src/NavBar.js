import React, { Component } from "react";
import { Animated, StyleSheet, View, Easing } from "react-native";
import { Link } from "react-router-native";
import { AnimatedChild } from "./AnimatedChild";

const initialState = props => ({
  currentTitle: props.match.params.page_id || "header",
  nextTitle: null,
  animate: new Animated.Value(0)
});

export class NavBar extends Component {
  state = initialState(this.props);

  componentDidUpdate(prevProps, prevState) {
    console.log("did update", prevProps, this.props);
    if (prevProps.match.params.page_id != this.props.match.params.page_id) {
      this.setState({
        ...prevState,
        nextTitle: this.props.match.params.page_id
      });
      this.animate();
    }
  }

  animate() {
    Animated.timing(this.state.animate, {
      toValue: 1,
      duration: 1000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true
    }).start(() => this.setState(initialState(this.props)));
  }

  render() {
    console.log(this.props, this.state);

    const previousStyles = {
      opacity: this.state.animate.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
      }),
      transform: [
        {
          translateX: this.state.animate.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -150]
          })
        }
      ]
    };

    const currentStyles = {
      opacity: this.state.animate,
      transform: [
        {
          translateX: this.state.animate.interpolate({
            inputRange: [0, 1],
            outputRange: [150, -10]
          })
        }
      ]
    };

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Animated.Text style={[styles.text, previousStyles]}>
            {this.state.currentTitle}
          </Animated.Text>
          {this.state.currentTitle && (
            <Animated.Text style={[styles.text, currentStyles]}>
              {this.state.nextTitle}
            </Animated.Text>
          )}
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
