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
});
