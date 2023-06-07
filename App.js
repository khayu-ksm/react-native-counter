import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, SafeAreaView, TextInput, FlatList } from 'react-native';
import styles from './styles'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const noteData = [
  {
    id: '1',
    title: 'Monday',
    text: 'Meeting at the office'
  },
  {
    id: '2',
    title: 'Wednesday',
    text: 'Client Meeting at their office'
  },
  {
    id: '3',
    title: 'Friday',
    text: 'Meet up with highschool friends'
  },
  {
    id: '4',
    title: 'Weekend',
    text: 'Holidayyyyyyy!!!!'
  },
];

const taskData = [
  {
    id: '1',
    text: 'Wake up early'
  },
  {
    id: '2',
    text: 'Walk the dog'
  },
  {
    id: '3',
    text: 'Eat healthy breakfast'
  },
]

const NoteItem = ({ title, text }) => (
  <View style={styles.noteItem}>
    <Text style={styles.noteTitle}>{title}</Text>
    <Text style={styles.noteText}>{text}</Text>
  </View>
);

const TaskItem = ({ text }) => (
  <View style={styles.taskItem}>
    <BouncyCheckbox onPress={(isChecked: boolean) => {}} />
    <Text style={styles.taskText}>{text}</Text>
  </View>
);

export default function App() {

  const [toggle, setToggle] = useState(false)

  const renderNoteItem = ({ item }) => (
    <NoteItem title={item.title} text={ item.text } />
  );

  const renderTaskItem = ({ item }) => (
    <TaskItem text={ item.text } />
  );

  const noteTab = () => setToggle(false)
  const taskTab = () => setToggle(true)
  const searchIcon = <FontAwesome5 name={'search'} size={20} color={'grey'}/>;
  const plusIcon = <FontAwesome5 name={'plus-circle'} size={40} color={'grey'} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabBar}>
        <Pressable style={styles.button} onPress={noteTab}>
          <Text style={styles.buttonText}>Note</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={taskTab}>
          <Text style={styles.buttonText}>Tasks</Text>
        </Pressable>
      </View>

      {!toggle && <View style={styles.noteBlk}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>{searchIcon}</Text>
          <TextInput style={styles.input} placeholder='Search' />
        </View>
        <FlatList
          numColumns={2}
          data={noteData}
          keyExtractor={(item) => item.id}
          renderItem={renderNoteItem}
        />
      </View>}

      
      {toggle && <View style={styles.taskBlk}>
        <FlatList
          data={taskData}
          keyExtractor={(item) => item.id}
          renderItem={renderTaskItem}
        />
      </View>}

      <View style={styles.addIcon}>{ plusIcon }</View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}