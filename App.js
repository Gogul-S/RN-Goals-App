import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {


  const [tasks, setTasks] = useState([]);
  const [modalVisible,setModalVisible] = useState(false);

  const buttonHandler = enteredText => {
    setTasks([...tasks, {
      key: (Math.random().toString()),
      value: enteredText
    }])

    setModalVisible(false);

  }

  const deleteHandler = goalId => {
      setTasks( tasks.filter((task) => task.key !== goalId))
  }

  const goalModalHandler =  () => {
      setModalVisible(true)
  }

  const onCancelHandler = () => {
      setModalVisible(false);
  }

  return (
    <View style={{ padding: 80, flexDirection: 'column' }}>
      <Button title="Add Goal" onPress = {goalModalHandler}/>
      <GoalInput visible = {modalVisible} onAddGoal={buttonHandler} onCancel = {onCancelHandler} />

      <FlatList data={tasks} renderItem={(listItem) =>
        <GoalItem task={listItem.item.value} id = {listItem.item.key} onDelete = {deleteHandler}  />
      } />

    </View>
  );
}

