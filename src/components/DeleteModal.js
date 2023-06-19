import { Modal, Text, Button, View } from "react-native";
import { StyleSheet } from "react-native";

const DeleteModal = ({ visible, deleteOnPress, cancelOnPress }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Are you sure you want to delete it?</Text>
          <View style={styles.btnContainer}>
            <Button title="Delete" onPress={deleteOnPress} />
            <Button title="Cancel" onPress={cancelOnPress} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7c6dec',
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10
  },
  text: {
    fontSize: 20
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: 'space-around',
    paddingTop: 20
  },
});
