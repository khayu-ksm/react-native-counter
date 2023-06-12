import { Text, View, TextInput, Pressable, SafeAreaView } from "react-native";
import styles from "./createTask.style";

function CreateTaskScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.creteTaskText}>New Task</Text>
        </View>
        <View>
          <TextInput placeholder="Enter Task" style={styles.taskInput} />
        </View>
        <Pressable style={styles.addTaskButton}>
          <Text style={styles.addTaskButtonText}>Add New Note</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
};

export default CreateTaskScreen;