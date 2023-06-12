import React, { useState } from 'react';
import { Text, View, Pressable, SafeAreaView, TextInput, FlatList } from 'react-native';
import styles from './home.style'
import {noteData} from '../createNote/createNote'

// const noteData = [
//   {
//     id: '1',
//     title: 'Monday',
//     text: 'Meeting at the office'
//   },
//   {
//     id: '2',
//     title: 'Wednesday',
//     text: 'Client Meeting at their office'
//   },
//   {
//     id: '3',
//     title: 'Friday',
//     text: 'Meet up with highschool friends'
//   },
//   {
//     id: '4',
//     title: 'Weekend',
//     text: 'Holidayyyyyyy!!!!'
//   },
// ];

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

function renderNoteData(itemData) {
  return (
    <View style={styles.noteItem}>
      <Pressable
        style={({ pressed }) => [
          styles.innerNoteContainer,
          pressed ? styles.notePressed : null,
        ]}
        android_ripple={{ color: '#ccc' }}>
        <View>
          <Text style={styles.noteTitle}>{itemData.item.title}</Text>
        </View>
        <View>
          <Text>{itemData.item.text}</Text>
        </View>
      </Pressable>
    </View>
  )
};

function renderTaskData(itemData) {
  return (
    <View style={styles.taskItem}>
      <Text>{itemData.item.text}</Text>
    </View>
  )
}

function HomeScreen({ navigation }) {
  const [tabToggle, setTabToggle] = useState(false);

  function noteTab() {
    return setTabToggle(false)
  }

  function taskTab() {
    return setTabToggle(true)
  }

  console.log(noteData);

  return (
    <View>
      <SafeAreaView>
        <View style={styles.outerContainer}>
          <Text style={styles.headingText}>ToDo List</Text>
          <Text style={styles.subHeading}>Categories</Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
              onPress={noteTab}>
              <Text style={styles.buttonText}>Note</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
              onPress={taskTab}>
              <Text style={styles.buttonText}>Task</Text>
            </Pressable>
          </View>
          {!tabToggle &&
            <View>
              <TextInput placeholder='Search' style={styles.input} />
              <Pressable
                style={styles.addButton}
                onPress={() => {
                  navigation.navigate('CreateNote');
                }}
              >
                <Text style={styles.addButtonText}>Add Note</Text>
              </Pressable>
              <FlatList numColumns={2} data={noteData} keyExtractor={(item) => item.id} renderItem={renderNoteData} />
            </View>}
          {tabToggle &&
            <View>
              <Text style={styles.taskHeading}>Today's Tasks</Text>
              <Pressable
                style={styles.addButton}
                onPress={() => {
                  navigation.navigate('CreateTask');
                }}
              >
                <Text style={styles.addButtonText}>Add Task</Text>
              </Pressable>
              <FlatList data={taskData} keyExtractor={(item) => item.id} renderItem={renderTaskData} />
            </View>}
        </View>
      </SafeAreaView>
    </View>
  )
};

export default HomeScreen;