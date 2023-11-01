import { styles } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { DrawerActions, useNavigation } from "@react-navigation/native";
import { theme } from "../../global/styles/theme";


interface Props {
    name: string;
  }

export function HeaderComponent({name}:Props) {
  const navigation = useNavigation(); // era isso aqui, tava do lado de fora

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Ionicons name="menu" size={35} color={theme.colors.blue} />
      </TouchableOpacity>
      <Text style={styles.text}>{name}</Text>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="person-outline" size={35} color={theme.colors.blue} />
      </TouchableOpacity>
    </View>
  );
}
