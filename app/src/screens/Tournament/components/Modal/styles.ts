import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonClose: {
    flex: 1,
    backgroundColor: "transparent",
  },
  wrapper2: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  buttonCompany: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  empresas: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
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
  text: {
    color: "black",
    fontSize: 15,
    marginTop: 10,
  },
  textViewModel: {
    color: theme.colors.blue,
    fontSize: 35,
  },
  containerInput: {
    width: "100%",
  },
  textInput: {
    backgroundColor: theme.colors.w,
    borderWidth: 2,
    borderColor: theme.colors.gray,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    marginTop: 6,
  },
});
