import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View, Button, Text } from "react-native";

import { AddTodo } from "./Extensions/components/AddTodo.js";
import { CompletedTodo } from "./Extensions/components/CompletedTodo.js";
import { DisplayTodo } from "./Extensions/components/DisplayTodo.js";
import { GlobalStyle } from "./Extensions/styles/GlobalStyles.js";

const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          tabBarLabel: ({ focused }) => {
            let labelStyle = focused
              ? GlobalStyle.tabLabelFocused
              : GlobalStyle.tabLabel;
            let labelText;

            if (route.name === "TodoList") {
              labelText = "Todo List";
            } else if (route.name === "CompletedList") {
              labelText = "Completed Task";
            } else if (route.name === "AddTodo") {
              labelText = "Add Task";
            }

            return <Text style={labelStyle}>{labelText}</Text>;
          },
          tabBarIcon: () => null,
        })}
        tabBarOptions={{
          activeTintColor: "red",
          inactiveTintColor: "gray",
          style: GlobalStyle.tabBar,
        }}
      >
        <Stack.Screen
          name="TodoList" //screen name
          component={DisplayTodo} //component name
          options={{ title: "Daily Planner" }} //app title
        />
        <Stack.Screen
          name="CompletedList" //screen name
          component={CompletedTodo} //component name
          options={{ title: "Completed Tasks" }} //app title
        />
        <Stack.Screen
          name="AddTodo" //screen name
          component={AddTodo} //component name
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
