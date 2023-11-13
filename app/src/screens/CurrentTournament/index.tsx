import React from "react";
import { SafeAreaView, View } from "react-native";
import { HeaderComponent } from "../../components/Header";

import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useTournament } from "../../hooks/tournament";

export function CurrentTournament() {
  const navigation: NavigationProp<any> = useNavigation();

  const { data: currentTournament } = useTournament();

  const disabledButtonFinal = React.useMemo(
    () =>
      Object.keys(currentTournament!.tournament.final).length > 0 ? false : true,
    [currentTournament]
  );

  return (
    <SafeAreaView>
      <HeaderComponent name={currentTournament?.name ?? ""} canGoback />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("CurrentMatch", {
            name: "semifinais",
          });
        }}
      >
        <Text style={styles.text}>Semifinais</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CurrentMatch", {
            name: "final",
          });
        }}
        style={[
          styles.button,
          {
            opacity: !disabledButtonFinal ? 1 : 0.4,
          },
        ]}
        disabled={disabledButtonFinal}
      >
        <Text style={styles.text}>Final</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
