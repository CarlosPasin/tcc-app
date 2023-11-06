import React from "react";

import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Logo } from "../../assets/logo";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const [login, onChangeUser] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Logo width="300px" />
      <View style={styles.containerForm}>
        <View style={styles.containerInput}>
          <Text style={styles.text}>Login</Text>
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
          <Text style={styles.text}>Senha</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            onChangeText={(text) => {
              onChangePassword(text);
            }}
            value={password}
            placeholder="Digite sua senha"
            placeholderTextColor={"#959595"}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Ranking" as never);
          }}
        >
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Register" as never);
        }}
      >
        <Text style={styles.underlineTextButton}>Criar conta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
