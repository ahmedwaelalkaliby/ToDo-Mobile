import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import CompletedTodos from "./CompletedTodos";
import StackNavigator from "./StackNavigator";

const Tabs = createBottomTabNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === "Main") {
              return <Ionicons name="home" size={size} color={color} />;
            } else if (route.name === "CompletedTodos") {
              return (
                <FontAwesome
                  name="calendar-check-o"
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarActiveTintColor: "#0058",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tabs.Screen name="Main" component={StackNavigator} />
        <Tabs.Screen name="CompletedTodos" component={CompletedTodos} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Router;
