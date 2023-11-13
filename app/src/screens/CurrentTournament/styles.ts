import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  button: {
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
  text: {
    fontSize: 20,
    color: theme.colors.blue,
    alignSelf: "center",
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
});
