import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { HeaderComponent } from "../../components/Header";

export function Ranking() {
  const data = [{ id: 1, name: "tênis", qnt:"32 players" }, { id: 2, name: "tênis", qnt:"32 players" }];

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent name="Ranking"/>
      <FlatList
        data={data}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => 
        <TouchableOpacity style={styles.buttonList}>

        <Text style={styles.list}>{item.name} <Text style={styles.players}>{item.qnt}</Text></Text>
        </TouchableOpacity>}
      />
    </View>
  );
}
