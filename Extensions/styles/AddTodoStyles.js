import { StyleSheet } from "react-native";

export const addTodoStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  tb: {
    borderColor: "black",
    borderWidth: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 20,
  },
  descText: {
    height: 120,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    paddingTop: 0,
  },
  titleText: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: {
    color: "white",
    fontSize: 18,
    fontWeight: 700,
  },
  buttonList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnClr2: {
    backgroundColor: "green",
  },
  btnClr1: {
    backgroundColor: "blue",
  },
});
