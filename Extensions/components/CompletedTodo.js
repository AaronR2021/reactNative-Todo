import React, { useEffect, useState } from "react";
import { View, Button, ScrollView } from "react-native";
import { TileShow, ShowInfoTab } from "../components/components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export const CompletedTodo = ({ navigation, route }) => {
  const [todoList, setTodoList] = useState([]);
  const [displayInfo, setDislayInfo] = useState(false);

  const fetchInfo = () => {
    AsyncStorage.getItem("todoList").then((arr) => {
      setTodoList(arr ? JSON.parse(arr) : []);
    });
  };

  const toggleInfo = (id) => {
    if (id) {
      const result = todoList.map((val) => {
        val.isComplete = val.id == id ? !val.isComplete : val.isComplete;
        return val;
      });
      const updatedList = JSON.stringify(result);
      AsyncStorage.setItem("todoList", updatedList).then((date) => fetchInfo());
    }
  };

  const showInfo = (id) => {
    setDislayInfo(
      todoList.filter((val) => {
        return val.id == id;
      })
    );
  };

  useEffect(() => {
    fetchInfo();
  }, [route]);

  useEffect(() => {
    fetchInfo();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      // Function to run when screen comes into focus
      fetchInfo();

      // Clean up function
      return () => {
        // Function to run when screen goes out of focus
      };
    }, [])
  );

  return (
    <ScrollView>
      {displayInfo ? (
        <ShowInfoTab displayInfo={displayInfo} setDislayInfo={setDislayInfo} />
      ) : (
        todoList
          .filter((val) => {
            return val.isComplete == true;
          })
          .map((val, index) => {
            return (
              //add component here & pass in title, desc,
              <TileShow
                title={val?.title}
                desc={val?.desc}
                isComplete={val.isComplete}
                id={val?.id}
                key={index}
                toggleInfo={toggleInfo}
                showInfo={showInfo}
              />
            );
          })
      )}
    </ScrollView>
  );
};
