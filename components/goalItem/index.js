import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export function GoalItem({ title, onRemoveGoal, id }) {
  return (
    <TouchableOpacity onPress={() => onRemoveGoal(id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    backgroundColor: "#eee",
    marginVertical: 10,
  },
  goalItemText: {
    textAlign: "center",
    fontSize: 20,
  },
});
