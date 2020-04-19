import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal!"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
    </View>
  );
};

export default GoalInput;
