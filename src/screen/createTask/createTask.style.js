import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  addTaskButton: {
    width: 150,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: '#1b7979',
    borderRadius: 50,
    marginVertical: 20
  },
  addTaskButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default styles;