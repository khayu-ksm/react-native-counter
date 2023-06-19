import { useState, useEffect, useContext } from "react";
import { Text, View, Pressable, TextInput, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import IconBtn from "../../components/IconBtn";
import styles from "./home.style";

const Home = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [tabToggle, setTabToggle] = useState(false);
  const [notes, setNotes] = useState([]);
  const [tasks, setTasks] = useState([]);

  const noteTab = () => {
    return setTabToggle(false);
  };

  const taskTab = () => {
    return setTabToggle(true);
  };

  useEffect(() => {
    getNotes();
    getTasks();
  }, [isFocused]);

  const getNotes = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("notes");
      const savedNotes = jsonValue != null ? JSON.parse(jsonValue) : [];
      setNotes(savedNotes);
    } catch (error) {
      console.log(error);
    }
  };

  const getTasks = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("tasks");
      const savedTasks = jsonValue != null ? JSON.parse(jsonValue) : [];
      setTasks(savedTasks);
    } catch (error) {
      console.log(error);
    }
  };

  const onPressHandlerNote = () => {
    navigation.navigate("CreateNote");
  };

  const onPressHandlerTask = () => {
    navigation.navigate("CreateTask");
  };

  const noteDetailsHandler = (note) => {
    navigation.navigate('NoteDetails', {note})
  }

  const renderNotes = (itemData) => {
    return (
      <View style={styles.noteItem}>
        <Pressable onPress={() => noteDetailsHandler(itemData.item)}>
          <View>
            <Text numberOfLines={2} style={styles.noteTitle}>
              {itemData.item.title}
            </Text>
          </View>
          <View>
            <Text numberOfLines={3}>{itemData.item.text}</Text>
          </View>
        </Pressable>
      </View>
    );
  };

  const renderTasks = (itemData) => {
    return (
      <Pressable style={styles.taskItem}>
        <View>
          <Text>{itemData.item.task}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>ToDo List</Text>
        <Text style={styles.subHeading}>Categories</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={noteTab}
        >
          <Text style={styles.buttonText}>Note</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={taskTab}
        >
          <Text style={styles.buttonText}>Task</Text>
        </Pressable>
      </View>

      {!tabToggle && (
        <View style={styles.noteContainer}>
          <TextInput placeholder="Search" style={styles.input} />

          <View>
            <FlatList
              numColumns={2}
              data={notes}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderNotes}
            />
          </View>

          <IconBtn
            iconName="add-circle"
            size={50}
            color="black"
            onPress={onPressHandlerNote}
            style={styles.addBtn}
          />
        </View>
      )}

      {tabToggle && (
        <View style={styles.taskContainer}>
          <Text style={styles.taskHeading}>Today's Tasks</Text>

          <View>
            <FlatList
              data={tasks}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderTasks}
            />
          </View>

          <IconBtn
            iconName="add-circle"
            size={50}
            color="black"
            onPress={onPressHandlerTask}
            style={styles.addBtn}
          />
        </View>
      )}
    </View>
  );
};

export default Home;
