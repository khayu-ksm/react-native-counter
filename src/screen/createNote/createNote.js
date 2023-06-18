import { useState } from "react";
import {
  Text,
  View,
  Pressable,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";


import styles from "./createNote.style";

function CreateNote({ navigation }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onPressHandler = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("notes");
      const savedNotes = jsonValue != null ? JSON.parse(jsonValue) : [];
      const newNote = { id: Date.now(), title, text };
      savedNotes.push(newNote);
      await AsyncStorage.setItem("notes", JSON.stringify(savedNotes));
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <View style={styles.container}>
        <View>
          <Text style={styles.creteNoteTitle}>New Note</Text>
        </View>
        <View>
          <TextInput
            value={title}
            placeholder="Note Title"
            style={styles.input}
            onChangeText={(value) => setTitle(value)}
          />
          <TextInput
            value={text}
            placeholder="Note Text"
            multiline={true}
            style={[styles.input, styles.noteTextInput]}
            onChangeText={(value) => setText(value)}
          />
        </View>
        <Pressable style={styles.saveBtn} onPress={onPressHandler}>
          <Text style={styles.saveBtnText}>Add New Note</Text>
        </Pressable>
      </View>
  );
}

export default CreateNote;