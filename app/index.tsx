import { Image } from "react-native";
import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

export default function Calculadora() {
  const [display, setDisplay] = useState(""); // Para mostrar o número na tela
  const [num1, setNum1] = useState(null); // Armazena o primeiro número
  const [operator, setOperator] = useState(null); // Armazena o operador (+, -, etc.)

  const [advanced, setAdvanced] = useState(false);

  const image2 = require("../assets/images/calculadora.png");

  const handleNumberPress = (number) => {
    setDisplay((prev) => prev + number); 
  };

  const handleShow = () => {
    if (advanced == false) {
      setAdvanced(true);
      console.log(advanced);
    }
    else{
      setAdvanced(false);
      console.log(advanced);
    }
  }

  const handleNegative = (number) => {
    if (!display.includes("-")) {
      setDisplay((prev) => number + prev); 
    }
    else{
      setDisplay((prev) => prev.substring(1));
    }
    
  };

  const handlePoint = (number) => {
    if (!display.includes(".") && display.length > 0) {
        setDisplay((prev) => prev + number); 
    }
  };
  
  const handleOperatorPress = (operator) => {
    setNum1(parseFloat(display)); 
    setOperator(operator); 
    setDisplay(""); 
  };

  const calculateResult = () => {
    if (operator === "+" && num1 !== null) {
      setDisplay((prev) => (num1 + parseFloat(prev)).toString()); 
    }
    else if(operator === "-" && num1 !== null){
        setDisplay((prev) => (num1 - parseFloat(prev)).toString());
    }
    else if(operator === "/" && num1 !== null){
        setDisplay((prev) => (num1 / parseFloat(prev)).toString());
    }
    else if(operator === "/" && num1 !== null){
        setDisplay((prev) => (num1 / parseFloat(prev)).toString());
    }
    else if(operator === "X" && num1 !== null){
        setDisplay((prev) => (num1 * parseFloat(prev)).toString());
    }
    else if(operator === "^" && num1 !== null){
      setDisplay((prev) => (num1 ** parseFloat(prev)).toString());
    }
    else if(operator === "/x" && num1 !== null){
      setDisplay((prev) => (num1 ** parseFloat(prev)).toString());
    }

    setNum1(null); 
    setOperator(null); 
  };

  const handlePercent = () => {
    if (display) {
      setDisplay((prev) => (parseFloat(prev) / 100).toString());
    }
  };

  const handleTen = () => {
    if (display) {
      setDisplay((prev) => (10 ** parseFloat(prev)).toString());
    }
  };

  const handleInverso = () => {
    if (display) {
      setDisplay((prev) => (1 / parseFloat(prev)).toString());
    }
  };

  const handleRaiz = () => {
    if (display) {
      setDisplay((prev) => (Math.sqrt(parseFloat(prev))).toString());
    }
  };

  const handleDelete = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setDisplay(""); 
    setNum1(null);
    setOperator(null);
  };

  

  return (
    <LinearGradient colors={["#B3B3B3FF", "#616161FF"]} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container2}>

        <TouchableOpacity style={styles.button1} onPress={handleShow}>
            <Image source={image2} style={styles.imagen2} />
            </TouchableOpacity>

          <View style={styles.inputz}>
            <Text style={{ fontSize: 24, color: "#000" }}>{display}</Text>
          </View>

          <View style={styles.hori}>
            <TouchableOpacity style={styles.button1} onPress={handleClear}>C</TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => handleNegative("-")}>+/-</TouchableOpacity>
            <TouchableOpacity style={styles.button1}  onPress={handlePercent}>%</TouchableOpacity>
            <TouchableOpacity style={styles.button3} onPress={handleDelete}>◀</TouchableOpacity>
          </View>

          <View style={styles.hori}>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberPress("7")}>7</TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberPress("8")}>8</TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberPress("9")}>9</TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => handleOperatorPress("/")}>/</TouchableOpacity>
          </View>

          <View style={styles.hori}>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberPress("4")}>4</TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberPress("5")}>5</TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberPress("6")}>6</TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => handleOperatorPress("X")}>X</TouchableOpacity>
          </View>

          <View style={styles.hori}>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberPress("1")}>1</TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberPress("2")}>2</TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberPress("3")}>3</TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => handleOperatorPress("-")}>-</TouchableOpacity>
          </View>

          <View style={styles.hori}>
            <TouchableOpacity style={styles.button2} onPress={calculateResult}>=</TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberPress("0")}>0</TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePoint(".")}>.</TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => handleOperatorPress("+")}>+</TouchableOpacity>
          </View>

          { advanced == true ?
            <View style={styles.hori}>
              <TouchableOpacity style={styles.button1} onPress={handleRaiz}>²√x</TouchableOpacity>
              <TouchableOpacity style={styles.button1} onPress={() => handleOperatorPress("^")}>x^y</TouchableOpacity>
              <TouchableOpacity style={styles.button1} onPress={handleTen}>10^x</TouchableOpacity>
              <TouchableOpacity style={styles.button1} onPress={handleInverso}>1/x</TouchableOpacity>
            </View>
          : null }

        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 9 / 10,
    gap: 15,
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    backgroundColor: "#666666FF",
    padding: 20,
    borderRadius: 15,
  },
  inputz: {
    alignItems: "center",
    height: 45,
    width: 221,
    backgroundColor: "#E2E2E2FF",
    borderRadius: 8,
    marginBottom: 5,
    borderWidth: 3,
    borderColor: "#3B3B3BFF",
  },
  hori: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  button: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    height: 50,
    width: 50,
    justifyContent: "center",
    borderRadius: 100,
    alignItems: "center",
    fontSize: 18,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  button1: {
    backgroundColor: "#C5C5C5FF",
    padding: 10,
    height: 50,
    width: 50,
    justifyContent: "center",
    borderRadius: 100,
    alignItems: "center",
    fontSize: 18,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  button2: {
    backgroundColor: "#FFBD5BFF",
    padding: 10,
    height: 50,
    width: 50,
    justifyContent: "center",
    borderRadius: 100,
    alignItems: "center",
    fontSize: 18,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  button3: {
    backgroundColor: "#A1A1A1FF",
    padding: 10,
    height: 50,
    width: 50,
    justifyContent: "center",
    borderRadius: 100,
    alignItems: "center",
    fontSize: 18,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  background: {
    flex: 1,
  },
  imagen2: {
    height: 30,
    width: 30,
  },
});
