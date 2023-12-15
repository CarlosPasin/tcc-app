import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { createUser } from "../../store/modules/user/actions";

export function Register() {
  const [login, onChangeUser] = React.useState("");
  const [name, onChangeName] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");
  const navigation = useNavigation();

  const saveUser = () => {
    if (!name) {
      Alert.alert("Digite o seu nome")
    } else if (!login) {
      Alert.alert("Digite o seu login")
    } else if (!password) {
      Alert.alert("Digite a sua senha")
    } else if (!confirmPassword) {
      Alert.alert("Digite a sua confirmação senha")
    } else if (password !== confirmPassword) {
      Alert.alert("Senhas diferentes")
    } else {
      const user = {
        id: Math.floor(Math.random() * (1000 - 10 + 1) + 10),
        username: login,
        name,
        psw: password,
        points: 0,
      }
      createUser(user)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerForm}>
        <View style={styles.containerInput}>
          <Text>Login</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              onChangeUser(text);
            }}
            value={login}
            placeholder="Digite seu user"
            placeholderTextColor={"#959595"}
          />
        </View>
        <View style={styles.containerInput}>
          <Text>Nome</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              onChangeName(text);
            }}
            value={name}
            placeholder="Digite seu Nome Completo"
            placeholderTextColor={"#959595"}
          />
        </View>
        <View style={styles.containerInput}>
          <Text>Senha</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={(text) => {
              onChangePassword(text);
            }}
            value={password}
            placeholder="Digite sua senha"
            placeholderTextColor={"#959595"}
          />
        </View>
        <View style={styles.containerInput}>
          <Text>Confirme sua Senha</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={(text) => {
              onChangeConfirmPassword(text);
            }}
            value={confirmPassword}
            placeholder="Confirme sua senha"
            placeholderTextColor={"#959595"}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            saveUser()
            navigation.navigate("Login" as never);
          }}
        >
          <Text style={{color:"white"}}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
