import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    paddingHorizontal: 20,
  },
  creteNoteTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    marginTop: 25,
    padding: 16,
    borderColor: "#adb5bd",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#f0f1f5",
  },
  noteTextInput: {
    paddingTop: 16,
    height: 100
  },
  saveBtn: {
    padding: 16,
    backgroundColor: "#1b7979",
    width: 150,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 20,
  },
  saveBtnText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;