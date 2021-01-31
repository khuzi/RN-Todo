import React, { useContext } from "react";
import { Button, Text } from "react-native";

import GoalContext from "../../context/context";

export function AddGoal() {
  const { dispatch } = useContext(GoalContext);
  return (
    <Button
      title="Add New Goal"
      onPress={() => dispatch({ type: "MODAL_OPEN" })}
    />
  );
}
