import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { HeaderComponent } from "../../components/Header";

export function TournamentScreen() {
  const dataT = [{ id: 1, name: "Jocol masculino" }, { id: 2, name: "Amigos do campo" }];

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent name="Campeonato"/>
      <FlatList
        data={dataT}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => 
        <TouchableOpacity style={styles.buttonList}>

        <Text style={styles.list}>{item.name}</Text>
        </TouchableOpacity>}
      />
      <TouchableOpacity style={styles.buttonCreate}>
        <AntDesign name="plus" size={30} color="#2F80ED" />
      </TouchableOpacity>
    </View>
  );
}
