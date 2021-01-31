import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { GoalInput, AddGoal, AllGoals } from "./components";

import GlobalState from "./context/globalState";

export default function App() {
  return (
    <GlobalState>
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
        <AddGoal />
        <GoalInput />
        <AllGoals />
        <StatusBar style="auto" />
      </View>
    </GlobalState>
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
