import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export function GoalInput({ newGoal, newGoalHandler, allGoalsHandler }) {
  return (
    <View style={styles.menu}>
      <TextInput
        value={newGoal}
        placeholder="Enter Goal"
        style={styles.goalText}
        onChangeText={newGoalHandler}
      />
      <TouchableOpacity onPress={allGoalsHandler}>
        <View style={styles.goalBtn}>
          <Text style={styles.btnText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
  },
  goalText: {
    borderWidth: 1,
    borderColor: "#000",
    width: "80%",
    borderRadius: 25,
    padding: 8,
  },
  goalBtn: {
    backgroundColor: "#000",
    width: 45,
    height: 45,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 40,
  },
});
