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
  buttonCreate: {
    display: "flex",
    width: 50,
    height: 50,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    position: "absolute",
    right: 25,
    bottom: 64,
    borderRadius: 50,
    backgroundColor: theme.colors.gray,
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
    marginHorizontal: 10,
    marginBottom: 10,
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
  modal: {
    flex: 1,
    backgroundColor: "#ddd",
    margin: 40,
    borderRadius: 30,
  },
  containerModel: {
    justifyContent: "center",
    alignItems: "center",
  },
  modelText: {
    color: theme.colors.blue,
    fontSize: 25,
  },
  modelButton: {
    backgroundColor: theme.colors.blue,
    width: "100%",
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 1,
  },
  modelButtonText: {
    color: theme.colors.w,
    fontSize: 20,
  },
  viewModel: {
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

  textViewModel: {
    color: theme.colors.blue,
    fontSize: 35,
  },
});
