import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  header: {
    display: "flex",
    marginTop: 30,
    paddingHorizontal: 8,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  text: {
    color: theme.colors.blue,
    fontSize: 35,
  },
  button: {
    display: "flex",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  buttonList: {
    display: "flex",
    paddingVertical: 20,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignSelf: "stretch",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: theme.colors.blue,
    margin: 10,
  },
  list: {
    color: "#196CE8",
    textAlign: "left",
    fontSize: 25,
  },
  players: {
    color: "#196CE8",
    textAlign: "left",
    fontSize: 16,
  },
});
