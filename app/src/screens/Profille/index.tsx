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
import { HeaderComponent } from "../../components/Header";
import { updateUser } from "../../store/modules/user/actions";
import { useUser } from "../../hooks/user";
import { useNavigation } from "@react-navigation/native";

export function Profile() {
  const { data: userData } = useUser();
  const [login, onChangeUser] = React.useState(userData!.username);
  const [name, onChangeName] = React.useState(userData?.name);
  const navigation = useNavigation();

  const saveUser = () => {
    if (!name) {
      Alert.alert("Digite o seu nome")
    } else if (!login) {
      Alert.alert("Digite o seu login")
    } else {
      updateUser(userData!.id, name, login)
      navigation.goBack()
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent name="Editar usuário" canGoback />
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
            placeholder="Digite seu nome"
            placeholderTextColor={"#959595"}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => saveUser()}>
          <Text style={{ color: "white" }}>Editar perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
