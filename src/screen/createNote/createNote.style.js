import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    creteNoteTitle: {
      marginHorizontal: 16,
      fontSize: 26,
      fontWeight: 'bold',
      color: 'white'
    },
    noteTitleInput: {
      marginHorizontal: 16,
      marginTop: 25,
      padding: 16,
      borderColor: '#adb5bd',
      borderWidth: 1,
      borderRadius: 8,
      backgroundColor: '#f0f1f5'
    },
    noteTextInput: {
      marginHorizontal: 16,
      marginTop: 25,
      padding: 16,
      height: 100,
      borderColor: '#adb5bd',
      borderWidth: 1,
      borderRadius: 8,
      backgroundColor: '#f0f1f5'
    },
    addNoteButton: {
      width: 150,
      marginHorizontal: 16,
      padding: 16,
      backgroundColor: '#1b7979',
      borderRadius: 50,
      marginVertical: 20
    },
    addNoteButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
    }
  })

export default styles;