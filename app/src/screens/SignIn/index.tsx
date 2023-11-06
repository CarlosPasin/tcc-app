import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { Logo } from "../../assets/logo";

export function SignIn() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Logo width="300px" style={styles.logo} />
        <View style={styles.containerTexts}>
          <Text style={styles.title}>
            Conecte-se{"\n"}
            organize seus torneios
          </Text>

          <Text style={styles.subtitle}>
            Crie campeonatos para jogar com seus amigos{"\n"}
            Dispute colocações nos rankings
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Login" as never);
            }}
          >
            <Text style={styles.buttonTitle}>Comece agora</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
