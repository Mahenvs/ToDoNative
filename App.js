import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);
  const [modalVisible,setVisible]=  useState(false);
  const addGoalsHandler = (goalEntered) => {
    setListOfGoals((list) => [...list, goalEntered]);
  };

  const deleteGoalsHandler = (itemId) =>{
    console.log("itemIs ",itemId);
    setListOfGoals((currentList) => 
      {
        return currentList.filter(item => itemId != item)
      })
    
  }
  const modalHandler = () =>{
    setVisible(false)
  }
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.container}>
      <Button title="Open" onPress={()=> setVisible(true)}></Button>
      <GoalInput onAddGoal ={addGoalsHandler} isVisible={modalVisible} onCancel={modalHandler}/>
      <Text style={{color:"white",marginVertical:10,fontWeight:"bold",fontSize:20}}>Goals are</Text>
      <View style={styles.body}>
        <FlatList
          alwaysBounceVertical={false}
          data={listOfGoals}
          renderItem={(itemData) => <GoalItem text={itemData.item} onDeleteItem={deleteGoalsHandler} />}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({

  body: {
    flex: 4,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  bold: {
    fontWeight: "bold",
  },
  text: {},
  header: {
    backgroundColor: "skyblue",
  },
});
