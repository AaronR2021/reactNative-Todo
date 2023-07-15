import React, { useState, useEffect } from "react";
import { Text, Pressable } from "react-native";
import { View, TouchableOpacity, TextInput, Alert } from "react-native";

import { TileStyle } from "../styles/tile.js";
import { addTodoStyle } from "../styles/AddTodoStyles.js";

import Icon from "react-native-vector-icons/FontAwesome";

export const TileShow = ({
  title,
  desc,
  isComplete,
  id,
  toggleInfo,
  showInfo,
}) => {
  return (
    <View style={TileStyle.Outercontainer}>
      <Pressable
        style={TileStyle.container}
        onPress={() => {
          showInfo(id);
        }}
      >
        <View style={TileStyle.container}>
          <Text style={TileStyle.title}>{title}</Text>
          <Text style={TileStyle.desc}>
            {desc?.length > 12 ? desc.substring(0, 12) + " ..." : desc}
          </Text>
        </View>
      </Pressable>

      <View style={TileStyle.deleteIcon}>
        {isComplete ? (
          <Icon
            name="heart"
            size={30}
            style={TileStyle.iconSelected}
            onPress={() => toggleInfo(id)}
          />
        ) : (
          <Icon
            name="heart"
            size={30}
            style={TileStyle.icon}
            onPress={() => toggleInfo(id)}
          />
        )}
      </View>
    </View>
  );
};

export const ShowInfoTab = ({ displayInfo, setDislayInfo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todoList, setTodoList] = useState([]);

  const fetchInfo = () => {
    setTitle(displayInfo[0].title);
    setDesc(displayInfo[0].desc);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const goHome = () => {
    setDislayInfo(false);
  };

  return (
    <View style={[addTodoStyle.container]}>
      <View>
        <Text style={[addTodoStyle.text]}>Task Title</Text>
        <TextInput
          style={addTodoStyle.titleText}
          value={title}
          placeholder="Enter Title"
          autoCapitalize="words"
          editable={false}
        />
        <Text style={addTodoStyle.text}>Task Description</Text>
        <TextInput
          style={addTodoStyle.descText}
          value={desc}
          placeholder="Enter Description"
          autoCapitalize="sentences"
          multiline={true}
          numberOfLines={4}
          editable={false}
        />
        <View style={addTodoStyle.buttonList}>
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
