import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import TodoItem from "./TodoItem";

const TodoList = ({
  filteredTodos,
  toggleTodoCompletion,
  deleteTodo,
  selectedFilter,
  handleFilterChange,
}) => {
  return (
    <>
      <View style={styles.dividerLine}></View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={selectedFilter === "all" ? styles.activeBtn : styles.btn}
          onPress={() => handleFilterChange("all")}
        >
          <Text
            style={selectedFilter === "all" ? styles.activeText : styles.text}
          >
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={
            selectedFilter === "inProgress" ? styles.activeBtn : styles.btn
          }
          onPress={() => handleFilterChange("inProgress")}
        >
          <Text
            style={
              selectedFilter === "inProgress" ? styles.activeText : styles.text
            }
          >
            In Progress
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={selectedFilter === "done" ? styles.activeBtn : styles.btn}
          onPress={() => handleFilterChange("done")}
        >
          <Text
            style={selectedFilter === "done" ? styles.activeText : styles.text}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            toggleTodoCompletion={toggleTodoCompletion}
            deleteTodo={deleteTodo}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  btn: {
    width: 100,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
  },
  activeBtn: {
    backgroundColor: "#fff",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  text: {
    color: "white",
  },
  activeText: {
    color: "black",
  },
});

export default TodoList;
