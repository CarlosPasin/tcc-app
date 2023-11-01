import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  header: {
    display: "flex",
    marginTop: 30,
    paddingHorizontal: 8,
    justifyContent: "space-between",
    flexDirection: 'row',
    alignItems: "center",
    alignSelf: "stretch",
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  text: {
    color: theme.colors.blue,
    fontSize: 35,
    fontFamily: theme.fonts.title700,
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
    position: "absolute",
    right: 25,
    bottom: 64,
    borderRadius: 50,
    backgroundColor: theme.colors.gray,
  },
});
