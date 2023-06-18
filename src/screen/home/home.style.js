import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingContainer: {
    paddingHorizontal: 20,
  },
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginVertical: 16,
  },
  subHeading: {
    marginVertical: 10,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  button: {
    width: '40%',
    padding: 12,
    backgroundColor: "#3a2f99",
    borderRadius: 15,
    borderColor: "#3a2f99",
    borderWidth: 2,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    marginTop: 25,
    padding: 16,
    borderColor: "#adb5bd",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#f0f1f5",
  },
  noteContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  addBtn: {
    position: "absolute",
    bottom: 60,
    right: 40,
  },
  noteItem: {
    width: '47%',
    backgroundColor: 'white',
    marginTop: 16,
    borderRadius: 10,
    padding: 16,
  },
  noteTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8
  },
  taskContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  taskItem: {
    backgroundColor: "white",
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 8,
  },
  taskHeading: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  taskItem: {
    backgroundColor: 'white',
    marginTop: 20,
    paddingVertical: 20,
    borderRadius: 50,
    paddingLeft: 50
  }
});

export default styles;