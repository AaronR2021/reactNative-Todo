import React, { useEffect, useState } from "react";
import { addTodoStyle } from "../styles/AddTodoStyles.js";
import { View, TouchableOpacity, Text, TextInput, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AddTodo = ({ navigation }) => {
  //! save to AsyncStorage

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [refetch, setRefetch] = useState(false);

  const fetchInfo=()=>{
    AsyncStorage.getItem("todoList").then((arr) => {
        setTodoList(arr ? JSON.parse(arr) : [])
    });
  }

  useEffect(() => {
    fetchInfo()
  }, []);

  useEffect(() => {
    if (refetch) {
        fetchInfo()
        setRefetch(false);

    }
  }, [refetch]);

  const addTodo = async () => {
    if (title.length > 0 && desc.length > 0) {
      //! add at the end of the array of objects.
      const newTodo = {
        id:(Math.floor(Math.random() * (1000000 - 1 + 1)) + 1),
        title,
        desc,
        isComplete: false,
      };
      setTodoList([...todoList, newTodo]);

      //! save it back to storage
      const updatedList = JSON.stringify([...todoList, newTodo]);
      AsyncStorage.setItem("todoList", updatedList)
        .then((data) => {
          setRefetch(true);
          setDesc("");
          setTitle("")
        })
        .catch((e) => {
            Alert.alert("Error", "Something went wrong", [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ]);
        });
      //! navigate back to main screen
    } else {
      //!alert
      Alert.alert("Error", "Please fill in all the details", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };
  const goHome = () => {
    navigation.navigate("TodoList",true);
  };
  return (
    <View style={[addTodoStyle.container]}>
      <View>
        <Text style={[addTodoStyle.text]}>Task Title</Text>
        <TextInput
          style={addTodoStyle.titleText}
          onChangeText={setTitle}
          value={title}
          placeholder="Enter Title"
          autoCapitalize="words"
        />
        <Text style={addTodoStyle.text}>Task Description</Text>
        <TextInput
          style={addTodoStyle.descText}
          onChangeText={setDesc}
          value={desc}
          placeholder="Enter Description"
          autoCapitalize="sentences"
          multiline={true}
          numberOfLines={4}
        />
        <View style={addTodoStyle.buttonList}>
          <TouchableOpacity
            style={[addTodoStyle.btn, addTodoStyle.btnClr1]}
            onPress={addTodo}
          >
            <Text style={addTodoStyle.btnTxt}>Add Todo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[addTodoStyle.btn, addTodoStyle.btnClr2]}
            onPress={goHome}
          >
            <Text style={addTodoStyle.btnTxt}>Go Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
