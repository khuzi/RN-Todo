import React, { useState } from "react";

import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";

import { GoalItem, GoalInput } from "./components";

export default function App() {
  const [allGoals, setAllGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  const allGoalsHandler = (newGoal, setNewGoal) => {
    if (newGoal) {
      setAllGoals((prevGoals) => [
        ...prevGoals,
        { key: uuid(), value: newGoal },
      ]);
      setIsAddModal(false);
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
      <Button title="Add New Goal" onPress={() => setIsAddModal(true)} />
      <GoalInput
        allGoalsHandler={allGoalsHandler}
        visible={isAddModal}
        onCancel={setIsAddModal}
      />
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
              <GoalItem
                title={itemData.item.value}
                onRemoveGoal={() => removeGoal(itemData.item.key)}
              />
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
});
