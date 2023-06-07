import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5ebe0',
    position: 'relative'
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 20,
    marginBottom: 20
  },
  button: {
    width: 150,
    borderWidth: 1,
    borderColor:'#8a817c',
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: '#8a817c',
    fontSize: 20,
    textAlign: 'center'
  },
  noteBlk: {
    marginHorizontal: 30
  },
  input: {
    position: 'relative',
    height: 40,
    padding: 10,
    paddingLeft: 40,
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 5,
    borderColor: '#8a817c'
  },
  searchIcon: {
    position: 'absolute',
    top: '25%',
    left: 20
  },
  noteItem: {
    flex: 0.5,
    backgroundColor: '#f5f3f4',
    paddingVertical: 40,
    paddingHorizontal: 10,
    marginTop: 35,
    marginHorizontal: 5,
    borderRadius: 15,
  },
  noteTitle: {
    fontSize: 15,
    fontWeight: 700,
    paddingBottom: 10,
    color: '#343a40',
  },
  noteText: {
    fontSize: 12,
    color: '#343a40',
  },
  taskBlk: {
    marginHorizontal: 30
  },
  taskItem: {
    flexDirection: 'row',
    backgroundColor: '#f5f3f4',
    paddingVertical: 30,
    paddingHorizontal: 10,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 15,
    alignItems: 'center'
  },
  taskText: {
    color: "#343a40"
  },
  addIcon: {
    position: 'absolute',
    bottom: 60,
    right: 60
  }
});

export default styles;