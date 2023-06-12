import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screen/home/home'
import CreateNoteScreen from "../screen/createNote/createNote";
import CreateTaskScreen from '../screen/createTask/createTask';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        contentStyle: { backgroundColor: '#7c6dec' }
      }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='CreateNote' component={CreateNoteScreen} />
        <Stack.Screen name='CreateTask' component={CreateTaskScreen} />
      </Stack.Navigator>
      <StatusBar style='dark' />
    </NavigationContainer>
  )
}

export default MyStack;