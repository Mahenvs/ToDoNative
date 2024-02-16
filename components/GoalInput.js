import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [goalEntered, setEnteredGoal] = useState();

  const goalInputHandler = (value) => {
    console.log(value);
    setEnteredGoal(value);
  };
  const addGoalHandler = () => {
    props.onAddGoal(goalEntered);
    setEnteredGoal("");
    props.onCancel();
  };
  const cancelModal = () => {
    props.onCancel();
  };
  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.box}>
        <TextInput
          placeholder="Add something..."
          style={styles.input}
          value={goalEntered}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={addGoalHandler} />
          <Button title="Cancel" onPress={cancelModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  box: {
    flex:1,
    padding:10,
    gap:2,
    marginBottom: 24,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#6b6ecb",
    borderRadius:8,
    borderBottomLeftRadius:4
  },
  buttonContainer: {
    borderRadius: 10,
    flexDirection: "row",
    marginHorizontal:10,
    marginTop:10,
    gap:10

  },
  input: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 3,
    color:'white'
  },
});
export default GoalInput;
