import { styles } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { DrawerActions, useNavigation } from "@react-navigation/native";
import { theme } from "../../global/styles/theme";

interface Props {
  name: string;
  canGoback?: boolean;
}

export function HeaderComponent({ name, canGoback }: Props) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {canGoback ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={35} color={theme.colors.blue} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name="menu" size={35} color={theme.colors.blue} />
        </TouchableOpacity>
      )}

      <Text style={styles.text}>{name}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile" as never);
        }}
        style={styles.button}
      >
        <Ionicons name="person-outline" size={35} color={theme.colors.blue} />
      </TouchableOpacity>
    </View>
  );
}
