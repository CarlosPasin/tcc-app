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
    marginBottom: 10,
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
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: theme.colors.blue,
    alignSelf: "center",
  },
});
