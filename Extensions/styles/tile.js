import { StyleSheet } from "react-native";

export const TileStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  Outercontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    color: "black",
  },
  desc: {
    fontSize: 18,
    color: "black",
  },
  bt: {
    borderWidth: 1,
    borderColor: "red",
  },
  deleteIcon: {
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    backgroundColor: "transparent",
    color: "black",
    padding: 3,
    borderRadius: 100,
  },
  iconSelected: {
    backgroundColor: "transparent",
    color: "red",
    padding: 3,
    borderRadius: 100,
  },
});
