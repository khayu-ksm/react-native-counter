import { useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./createTask.style";

const CreateTask = ({ navigation }) => {
  const [task, setTask] = useState('');

  const onPressHandler = async() => {
    try {
      const jsonValue = await AsyncStorage.getItem('tasks');
      const savedTasks = jsonValue != null ? JSON.parse(jsonValue) : [];
      const newTask = { id: Date.now(), task };
      savedTasks.push(newTask);
      await AsyncStorage.setItem('tasks', JSON.stringify(savedTasks));
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
      <View style={styles.container}>
        <View>
          <Text style={styles.creteTaskText}>New Task</Text>
        </View>
        <View>
        <TextInput
          value={task}
          placeholder="Enter Task"
          style={styles.taskInput}
          onChangeText={(value) => setTask(value)}
        />
        </View>
        <Pressable style={styles.addTaskButton} onPress={onPressHandler}>
          <Text style={styles.addTaskButtonText}>Add New Task</Text>
        </Pressable>
      </View>
  )
};

export default CreateTask;