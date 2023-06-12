import styles from './createNote.style';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Text, View, TextInput, Pressable, SafeAreaView } from "react-native";

function CreateNoteScreen({ navigation }) {
  // const [notes, setNotes] = useState([]);
  const [noteData, setNoteData] = useState([]);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteText, setNewNoteText] = useState('');

  function noteTitleInputHandler(text) {
    setNewNoteTitle(text)
  }

  function noteTextInputHandler(text) {
    setNewNoteText(text)
  }

  const loadNotes = async () => {
    try {
      const savedNotes = await AsyncStorage.getItem('notes');
      if (savedNotes !== null) {
        setNoteData(JSON.parse(savedNotes));
        console.log(noteData);
      }
    } catch (error) {
      console.log('Error loading notes from AsyncStorage:', error);
    }
  };

  const saveNotes = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('notes', jsonValue);
    } catch (error) {
      console.log('Error saving notes to AsyncStorage:', error);
    }
  };

  function addNoteHandler() {
    const newNote = { id: Date.now(), title: newNoteTitle, text: newNoteText };
    setNoteData([...noteData, newNote]);
    saveNotes(newNote);
    navigation.navigate('Home');
    // console.log(newNote);
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.creteNoteTitle}>New Note</Text>
        </View>
        <View>
          <TextInput placeholder="Note Title" style={styles.noteTitleInput} onChangeText={noteTitleInputHandler} />
          <TextInput placeholder="Note Description" style={styles.noteTextInput} multiline={true} onChangeText={noteTextInputHandler} />
        </View>
        <Pressable style={styles.addNoteButton} onPress={addNoteHandler}>
          <Text style={styles.addNoteButtonText}>Add New Note</Text>
        </Pressable>
      </View>
      {/* <View>
        {noteData.map((note) => (
        <View>
        <Text >{note.id}</Text>
        <Text >{note.title}</Text>
        <Text >{note.text}</Text>
        </View>
      ))}
      </View> */}
    </SafeAreaView>
  )
};

export default CreateNoteScreen;