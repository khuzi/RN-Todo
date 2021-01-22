import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  Button,
} from "react-native";

import { GoalContext } from "../../context/context";

export function GoalInput() {
  const { state, dispatch } = useContext(GoalContext);
  const [newGoal, setNewGoal] = useState();

  return (
    <Modal visible={state.isModal} animationType="slide">
      <View style={styles.root}>
        <View style={styles.menu}>
          <TextInput
            value={newGoal}
            placeholder="Enter Goal"
            style={styles.goalText}
            onChangeText={setNewGoal}
            autoFocus
          />
          <TouchableOpacity
            onPress={() => dispatch({ type: "ADD_GOAL", goal: newGoal })}
          >
            <View style={styles.goalBtn}>
              <Text style={styles.btnText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cancelBtn}>
          <Button
            title="Cancel"
            color="coral"
            onPress={() => dispatch({ type: "MODAL_CLOSE" })}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingVertical: 20,
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginLeft: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 40,
  },
  cancelBtn: {
    justifyContent: "center",
    marginTop: 15,
  },
});
