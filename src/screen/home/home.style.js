import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  outerContainer: {
    paddingHorizontal: 8
  },
  headingText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 16
  },
  subHeading: {
    marginVertical: 10,
    color: 'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    width: 170,
    padding: 12,
    marginHorizontal: 12,
    backgroundColor: '#3a2f99',
    borderRadius: 8,
    borderColor: '#3a2f99',
    borderWidth: 2
  },
  buttonPressed: {
    opacity: 0.25
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    marginHorizontal: 16,
    marginTop: 25,
    padding: 16,
    borderColor: '#adb5bd',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#f0f1f5'
  },
  noteItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    // elevation: 4,
    // shadowColor: 'black',
    // shadowOpacity: 0.5,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 8,
  },
  innerNoteContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  notePressed: {
    opacity: 0.5
  },
  noteTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 8
  },
  taskItem: {
    backgroundColor: 'white',
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 8
  },
  taskHeading: {
    marginHorizontal: 16,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  addButton: {
    width: 100,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: '#1b7979',
    borderRadius: 50,
    marginVertical: 20
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default styles;