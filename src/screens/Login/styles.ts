import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  containerForm: {
    display: "flex",
    paddingVertical: 25,
    paddingHorizontal: 17,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    backgroundColor: theme.colors.gray,
    borderRadius: 15,
    gap: 17,
    marginVertical: 15,
  },
  containerInput: {
    width: "100%",
  },
  textInput: {
    backgroundColor: theme.colors.w,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginTop: 6,
  },
  button: {
    backgroundColor: theme.colors.blue,
    width: "100%",
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: theme.colors.w,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
  },
  underlineTextButton: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.blue,
    textDecorationLine: "underline"
  },
  text: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.blue,
  }
});