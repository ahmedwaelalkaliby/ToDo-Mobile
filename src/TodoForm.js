import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const TodoForm = ({
  title,
  setTitle,
  description,
  setDescription,
  addNewTodo,
}) => {
  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        placeholder="Enter title"
        style={styles.input}
        onChangeText={(value) => setTitle(value)}
        value={title}
      />
      <TextInput
        placeholder="Enter Description"
        style={styles.input}
        onChangeText={(value) => setDescription(value)}
        value={description}
      />
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.submitBtn}
          onPress={addNewTodo}
        >
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    width: 300,
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  submitBtn: {
    width: 170,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
  },
});

export default TodoForm;
