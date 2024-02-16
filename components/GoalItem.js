import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.text)}
        android_ripple={{ color: "#dddddd" }}
      >
        <Text style={styles.textWhite}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textWhite: {
    color: "black",
    padding: 5,
  },
  goalItem: {
    height: 40,
    backgroundColor: "#fddadd",
    margin: 2,
    borderRadius:6,
    borderColor: "purple",
    borderWidth: 2,
  },
});
export default GoalItem;
