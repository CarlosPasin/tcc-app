import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { HeaderComponent } from "../../components/Header";
import { TextInput } from "react-native-gesture-handler";
import { ModalTournament } from "./components/Modal";
import { useNavigation } from "@react-navigation/native";
import {
  SetCurrentTournament,
  addTournament,
} from "../../store/modules/tournament/actions";
import { useTournaments } from "../../hooks/tournament";

export function TournamentScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const { list } = useTournaments();

  return (
    <View style={{ flex: 1 }}>
      <ModalTournament
        modalVisible={modalVisible}
        onClose={() => {
          setModalVisible(!modalVisible);
        }}
        onCreate={(torneio) => {
          if (torneio) addTournament(torneio);
          console.log(JSON.stringify(torneio));
        }}
      />
      <HeaderComponent name="Campeonato" />
      <FlatList
        data={list}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.buttonList}
            onPress={() => {
              SetCurrentTournament(item);
              navigation.navigate("CurrentTournament" as never);
            }}
          >
            <Text style={styles.list}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.buttonCreate}
        onPress={() => setModalVisible(true)}
      >
        <AntDesign name="plus" size={30} color="#2F80ED" />
      </TouchableOpacity>
    </View>
  );
}
