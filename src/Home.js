import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem("todos");
        if (storedTodos) {
          console.log("Stored Todos:", JSON.parse(storedTodos));
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error("Failed to load todos:", error);
      }
    };

    loadTodos();
  }, []);

  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem("todos", JSON.stringify(todos));
      } catch (error) {
        console.error("Failed to save todos:", error);
      }
    };

    saveTodos();
  }, [todos]);

  const addNewTodo = () => {
    if (!title || !description) return;

    const newTodo = {
      id: Date.now().toString(),
      title,
      description,
      isDone: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTitle("");
    setDescription("");
  };

  const deleteTodo = async (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
    await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleTodoCompletion = async (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTodos(updatedTodos);
    await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const getFilteredTodos = () => {
    switch (selectedFilter) {
      case "inProgress":
        return todos.filter((todo) => !todo.isDone);
      case "done":
        return todos.filter((todo) => todo.isDone);
      default:
        return todos;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Todo App!</Text>
      </View>
      <TodoForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        addNewTodo={addNewTodo}
      />
      {todos.length > 0 && (
        <TodoList
          filteredTodos={getFilteredTodos()}
          toggleTodoCompletion={toggleTodoCompletion}
          deleteTodo={deleteTodo}
          selectedFilter={selectedFilter}
          handleFilterChange={setSelectedFilter}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
    paddingTop: 50,
  },
  title: {
    fontSize: 36,
    fontFamily: "Roboto",
  },
});

export default Home;
