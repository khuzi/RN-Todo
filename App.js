import React, { useState } from "react";

import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function App() {
  const [newGoal, setNewGoal] = useState();
  const [allGoals, setAllGoals] = useState([]);

  const newGoalHandler = (goal) => {
    setNewGoal(goal);
  };

  const allGoalsHandler = () => {
    if (newGoal) {
      setAllGoals((prevGoals) => [
        ...prevGoals,
        { key: uuid(), value: newGoal },
      ]);
      setNewGoal(null);
    }
  };

  const removeGoal = (key) => {
    const updatedGoals = allGoals.filter((goal) => goal.key !== key);
    setAllGoals(updatedGoals);
  };

  return (
    <View style={styles.root}>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 30,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        TODO APPLICATION
      </Text>
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

      {allGoals.length > 0 && (
        <View style={styles.goalsBox}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              marginVertical: 5,
              textTransform: "uppercase",
            }}
          >
            All Goals
          </Text>
          <FlatList
            data={allGoals}
            renderItem={(itemData) => (
              <TouchableOpacity onPress={() => removeGoal(itemData.item.key)}>
                <View style={styles.goalItem}>
                  <Text style={styles.goalItemText}>{itemData.item.value}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 80,
    marginHorizontal: 30,
  },
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
  goalsBox: {
    marginTop: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
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
