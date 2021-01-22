import React, { useContext } from "react";

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

import GoalContextWarper from "./context/globalState";
import { GoalContext } from "./context/context";
import { REMOVE_GOAL, MODAL_OPEN } from "./context/actions";

export default function App() {
  const { state, dispatch } = useContext(GoalContext);

  return (
    <GoalContextWarper>
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
        <Button
          title="Add New Goal"
          onPress={() => dispatch({ type: MODAL_OPEN })}
        />
        <GoalInput />
        {state.goals.length > 0 && (
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
              keyExtractor={(item, index) => item.id}
              data={state.goals}
              renderItem={(itemData) => (
                <GoalItem
                  onRemoveGoal={() =>
                    dispatch({ type: REMOVE_GOAL, id: itemData.item.id })
                  }
                  title={itemData.item.value}
                />
              )}
            />
          </View>
        )}
        <StatusBar style="auto" />
      </View>
    </GoalContextWarper>
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
