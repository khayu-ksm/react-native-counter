import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  noteTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
    color: "white",
  },
  noteText: {
    fontSize: 18,
    opacity: 0.8,
  },
  btnContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 100,
    right: 30,
  },
  editButton: {
    backgroundColor: "orange",
    borderRadius: 50,
    padding: 10,
  },
  deleteButton: {
    backgroundColor: "red",
    borderRadius: 50,
    padding: 10,
    marginLeft: 10,
  },
});

export default styles;