import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  const increase = async () => {
    setCounter(counter + 1)
    try {
      const jsonValue = JSON.stringify(counter)
      await AsyncStorage.setItem('counterValue', jsonValue)
    } catch (e) {
      console.log(error);
    }
  }

  const decrease = async () => {
    setCounter(counter - 1)
    try {
      const jsonValue = JSON.stringify(counter)
      await AsyncStorage.setItem('counterValue', jsonValue)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('counterValue')
      return jsonValue != null ? setCounter(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.number}>
        <Text style={{fontSize: 20}}>{counter}</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Button title='Increase' onPress={increase} />
        <Button title='Decrease' onPress={decrease} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  number: {
    width: 100,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
