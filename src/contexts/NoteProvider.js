import { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from "@react-navigation/native";


const NoteContext = createContext()
const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    getNotes();
    // getTasks();
  }, [isFocused]);

  const getNotes = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("notes");
      const savedNotes = jsonValue != null ? JSON.parse(jsonValue) : [];
      setNotes(savedNotes);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <NoteContext.Provider value={{notes, setNotes, getNotes}}>
      {children}
    </NoteContext.Provider>
  )
}

export const useNotes = () => useContext(NoteContext);

export default NoteProvider;