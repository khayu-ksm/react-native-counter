import { StyleSheet, View, Text } from "react-native";
import IconBtn from "../../components/IconBtn";
import { useState, useContext } from "react";
import DeleteModal from "../../components/DeleteModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNotes } from "../../contexts/NoteProvider";
import styles from "./noteDetails.style";

const NoteDetails = (props, {navigation}) => {
  const { note } = props.route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const { setNotes } = useNotes();

  const openDeleteModal = () => {
    setModalVisible(true);
  };

  const cancelNote = () => {
    setModalVisible(false);
  }

  const deleteNote = async () => {
    const result = await AsyncStorage.getItem('notes')
    let notes = []
    if (result !== null) notes = JSON.parse(result)

    const newNotes = notes.filter(n => n.id !== note.id)
    setNotes(newNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(newNotes))
    navigation.navigate('Home');
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.noteTitle}>{note.title}</Text>
        <Text style={styles.noteText}>{note.text}</Text>
      </View>

      <View style={styles.btnContainer}>
        <IconBtn
          iconName="pencil"
          size={30}
          color="white"
          style={styles.editButton}
          // onPress={}
        />
        <IconBtn
          iconName="trash"
          size={30}
          color="white"
          style={styles.deleteButton}
          onPress={openDeleteModal}
        />
      </View>
      <DeleteModal visible={modalVisible} cancelNote={cancelNote} deleteNote={deleteNote}/>
    </View>
  );
};

export default NoteDetails;