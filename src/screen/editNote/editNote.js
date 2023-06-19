import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./editNote.style";

const EditNote = (props) => {
  const { note } = props.route.params;
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);

  const updateNote = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("notes");
      const savedNotes = jsonValue != null ? JSON.parse(jsonValue) : [];

      const updatedNotes = savedNotes.map((item) => {
        if (item.id === note.id) {
          return { ...item, title, text };
        }
        return item;
      });
      await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes));
      props.navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.creteNoteTitle}>Edit Note</Text>
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
      <Pressable style={styles.saveBtn} onPress={updateNote}>
        <Text style={styles.saveBtnText}>Edit Note</Text>
      </Pressable>
    </View>
  );
};

export default EditNote;