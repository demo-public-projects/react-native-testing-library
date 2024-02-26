import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("1"); 

  const handleInputChange = (text) => {
    setInputValue(text.replace(/[^0-9]/g, ""));
  };

  const increment = () => {
    setCount(count + Number(inputValue));
  };

  const decrement = () => {
    setCount(count - Number(inputValue));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter Value:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={handleInputChange}
        value={inputValue}
        maxLength={10} 
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.counterDisplay}>Current Count: {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  counterText: {
    fontSize: 20,
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: "50%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 18,
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
  },
  counterDisplay: {
    marginTop: 24,
    fontSize: 24,
  },
});
