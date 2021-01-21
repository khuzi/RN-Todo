import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  Button,
} from "react-native";

export function GoalInput({ allGoalsHandler, visible, onCancel }) {
  const [newGoal, setNewGoal] = useState();

  const goalHandler = () => {
    allGoalsHandler(newGoal);
    setNewGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.root}>
        <View style={styles.menu}>
          <TextInput
            value={newGoal}
            placeholder="Enter Goal"
            style={styles.goalText}
            onChangeText={setNewGoal}
          />
          <TouchableOpacity onPress={goalHandler}>
            <View style={styles.goalBtn}>
              <Text style={styles.btnText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cancelBtn}>
          <Button
            title="Cancel"
            color="coral"
            onPress={() => onCancel(false)}
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
