import React, { useContext } from "react";
import { FlatList, View, Text } from "react-native";

import { GoalItem } from "../";
import GoalContext from "../../context/context";

export function AllGoals() {
  const { state, dispatch } = useContext(GoalContext);

  return (
    <>
      <View
        style={{
          marginTop: 10,
          padding: 10,
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 6,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            textTransform: "uppercase",
          }}
        >
          {state.goals.length === 0
            ? "No Goals"
            : `${state.goals.length} ${
                state.goals.length === 1 ? "Goal" : "Goals"
              }`}
        </Text>
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={state.goals}
        renderItem={(itemData) => (
          <GoalItem
            onRemoveGoal={() =>
              dispatch({ type: "REMOVE_GOAL", id: itemData.item.id })
            }
            title={itemData.item.value}
          />
        )}
      />
    </>
  );
}
