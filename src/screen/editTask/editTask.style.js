import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150
  },
  creteTaskText: {
    marginHorizontal: 16,
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white'
  },
  taskInput: {
    marginHorizontal: 16,
    marginTop: 25,
    padding: 16,
    borderColor: '#adb5bd',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#f0f1f5'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  addTaskButton: {
    width: 150,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: '#1b7979',
    borderRadius: 50,
    marginTop: 20,
    alignSelf: 'center'
  },
  deleteTaskButton: {
    width: 150,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: 'red',
    borderRadius: 50,
    marginTop: 20,
    alignSelf: 'center'
  },
  addTaskButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default styles;