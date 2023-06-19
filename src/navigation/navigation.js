import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screen/home/home";
import CreateNote from "../screen/createNote/createNote";
import CreateTask from "../screen/createTask/createTask";
import NoteDetails from "../screen/noteDetails/noteDetails";
import EditNote from "../screen/editNote/editNote";
import EditTask from "../screen/editTask/editTask";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyle: { backgroundColor: "#7c6dec" },
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CreateNote" component={CreateNote} />
          <Stack.Screen name="NoteDetails" component={NoteDetails} />
          <Stack.Screen name="CreateTask" component={CreateTask} />
          <Stack.Screen name="EditTask" component={EditTask} />
          <Stack.Screen name="EditNote" component={EditNote} />
        </Stack.Navigator>
        <StatusBar style="dark" />
    </NavigationContainer>
  );
}

export default MyStack;
