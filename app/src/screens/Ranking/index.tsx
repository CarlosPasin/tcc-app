import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { HeaderComponent } from "../../components/Header";
import { useRankings } from "../../hooks/ranking";
import { useNavigation } from "@react-navigation/native";
import { SetCurrentRanking } from "../../store/modules/ranking/actions";

export function Ranking() {
  const { list } = useRankings();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent name="Ranking" />
      <FlatList
        data={list}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.buttonList}
            onPress={() => {
              SetCurrentRanking(item);
              navigation.navigate("CurrentRanking" as never);
            }}
          >
            <Text style={styles.list}>
              {item.name} <Text style={styles.players}>{item.qtd}</Text>
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
