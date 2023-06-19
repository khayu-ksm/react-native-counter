import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./editTask.style";

const EditTask = (props) => {
  const { taskData } = props.route.params;
  const [task, setTask] = useState(taskData.task);

  const updateTask = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("tasks");
      const savedTasks = jsonValue != null ? JSON.parse(jsonValue) : [];

      const updatedTasks = savedTasks.map((item) => {
        if (item.id === taskData.id) {
          return { ...item, task };
        }
        return item;
      });
      await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
      props.navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async () => {
    const result = await AsyncStorage.getItem("tasks");
    let extractedTasks = [];
    if (result !== null) extractedTasks = JSON.parse(result);

    const newTasks = extractedTasks.filter((n) => n.id !== taskData.id);
    await AsyncStorage.setItem("tasks", JSON.stringify(newTasks));
    props.navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.creteTaskText}>Edit Task</Text>
      </View>
      <View>
        <TextInput
          value={task}
          placeholder="Enter Task"
          style={styles.taskInput}
          onChangeText={(value) => setTask(value)}
        />
      </View>
      <View style={styles.btnContainer}>
        <Pressable style={styles.addTaskButton} onPress={updateTask}>
          <Text style={styles.addTaskButtonText}>Edit Task</Text>
        </Pressable>
        <Pressable style={styles.deleteTaskButton} onPress={deleteTask}>
          <Text style={styles.addTaskButtonText}>Delete Task</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EditTask;
