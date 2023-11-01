import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { HeaderComponent } from "../../components/Header";

export function Ranking() {
  const data = [{ id: 1, name: "tênis" }, { id: 2, name: "tênis" }];

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent name="Ranking"/>
      <FlatList
        data={data}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
      <TouchableOpacity style={styles.buttonCreate}>
        <AntDesign name="plus" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
