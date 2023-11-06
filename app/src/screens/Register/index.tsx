import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Register() {
  const [login, onChangeUser] = React.useState("");
  const [name, onChangeName] = React.useState("");
  const [phone, onChangePhone] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");
  const navigation = useNavigation();

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
          <Text>Nome completo</Text>
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
          <Text>Telefone</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              onChangePhone(text);
            }}
            value={phone}
            placeholder="Digite seu Telefone"
            placeholderTextColor={"#959595"}
          />
        </View>
        <View style={styles.containerInput}>
          <Text>Email</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              onChangeEmail(text);
            }}
            value={email}
            placeholder="Digite seu Email"
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
            navigation.navigate("Login" as never);
          }}
        >
          <Text style={{color:"white"}}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
