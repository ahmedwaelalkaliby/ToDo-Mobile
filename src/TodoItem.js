import React from "react";
import { Pressable, Text, View, TouchableOpacity, Platform, StyleSheet } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const TodoItem = ({ item, toggleTodoCompletion, deleteTodo }) => {
const { navigate } = useNavigation();
  return (
    <View style={styles.todoContainer}>
      <Pressable
        onPress={() => navigate("Todo Details", item)}
        style={styles.todoPressable}
      >
        <Text
          style={[
            styles.todo,
            item.isDone && styles.completedTodo,
          ]}
        >
          {item.title}
        </Text>
      </Pressable>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => toggleTodoCompletion(item.id)}>
          {Platform.OS === "ios" ? (
            <AntDesign
              name={item.isDone ? "checkcircle" : "checkcircleo"}
              size={24}
              color={item.isDone ? "green" : "black"}
            />
          ) : (
            <AntDesign
              name={item.isDone ? "checkcircle" : "checkcircleo"}
              size={24}
              color={item.isDone ? "green" : "black"}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTodo(item.id)}>
          {Platform.OS === "ios" ? (
            <EvilIcons name="trash" size={24} color="black" />
          ) : (
            <Feather name="trash" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 300,
    marginVertical: 10,
  },
  todoPressable: {
    flex: 1,
  },
  todo: {
    textAlign: "start",
    height: 50,
    padding: 10,
  },
  completedTodo: {
    textDecorationLine: "line-through",
    color: "#aeaeae",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default TodoItem;