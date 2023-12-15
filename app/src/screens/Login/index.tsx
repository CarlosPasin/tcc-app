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
import { Logo } from "../../assets/logo";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../../hooks/user";
import { SetCurrentUser } from "../../store/modules/user/actions";

export function Login() {
  const [login, onChangeUser] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const navigation = useNavigation();
  const { list: users } = useUser();

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
          onPress={async() => {
            const index = users.findIndex(item => item.username === login && item.psw === password)
            if (index > -1) {
              await SetCurrentUser(users[index])
              navigation.navigate("Ranking" as never);
            } else {
              Alert.alert('Usuário não encontrado')
            }
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
