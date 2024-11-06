import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Row from "../components/Row";
import Button from "../components/Button";
import calculator, { initialState } from "../util/calculator";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 9 / 10,
        gap: 15,
      },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
  background: {
    flex: 1,
  },
});

export default class App extends React.Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  render() {
    return (
      <LinearGradient
        colors={["#B3B3B3FF", "#616161FF"]}
        style={styles.background}
      >
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.handleTap("clear")}
            />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.handleTap("posneg")}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.handleTap("percentage")}
            />
            <Button
              text="/"
              theme="accent"
              onPress={() => this.handleTap("operator", "/")}
            />
          </Row>

          <Row>
            <Button text="7" onPress={() => this.handleTap("number", 7)} />
            <Button text="8" onPress={() => this.handleTap("number", 8)} />
            <Button text="9" onPress={() => this.handleTap("number", 9)} />
            <Button
              text="x"
              theme="accent"
              onPress={() => this.handleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleTap("number", 4)} />
            <Button text="5" onPress={() => this.handleTap("number", 5)} />
            <Button text="6" onPress={() => this.handleTap("number", 6)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.handleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.handleTap("number", 1)} />
            <Button text="2" onPress={() => this.handleTap("number", 2)} />
            <Button text="3" onPress={() => this.handleTap("number", 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.handleTap("operator", "+")}
            />
          </Row>

          <Row>
            <Button/>
            <Button text="0" onPress={() => this.handleTap("number", 0)} />
            <Button text="." onPress={() => this.handleTap("number", ".")} />
            <Button
              text="="
              theme="accent"
              onPress={() => this.handleTap("equal")}
            />
          </Row>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
