import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import TodoDetails from "./TodoDetails";
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Todo App", headerShown: false }}
      />
      <Stack.Screen
        name="Todo Details"
        component={TodoDetails}
        options={{ title: "Todo Details", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
