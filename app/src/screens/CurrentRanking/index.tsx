import React from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { HeaderComponent } from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRankingPlayers } from "../../hooks/ranking";
import { useUser } from "../../hooks/user";
import { theme } from "../../global/styles/theme";
import { ModalRanking } from "./components/Modal";
import ranking from "../../store/modules/ranking";

export function CurrentRanking() {
  const { data: currentPlayerRanking, list } = useRankingPlayers();
  const { data: user } = useUser();
  const playersOrder = list.sort((a,b) => b.points - a.points);
  const matchs = CurrentRanking!.ranking.name;
  return (
    <SafeAreaView>
{/*             {CurrentRanking && (
        <ModalRanking
          modalVisible={modalVisible}
          onClose={() => {
            setModalVisible(false);
          }}
          onConfirm={(time) => {
            const timesAtualizados = CurrentRanking?.ranking[name].map(
              () => {
                
                if (playerA.id === time.id) {
                  playerA = { ...playerA, ganhador: true };
                  playerB = { ...playerB, ganhador: false };
                }
                if (playerB.id === time.id) {
                  playerA = { ...playerA, ganhador: false };
                  timeB = { ...playerB, ganhador: true };
                }
                
                return [playerA, playerB];
              }
              );
              > */}
              
      <HeaderComponent name={currentPlayerRanking?.name ?? ""} canGoback />

      <FlatList
        data={list}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => (
          <View style={styles.containerItemList}>
            <Text style={styles.positionText}>{index + 1}º</Text>
            
            <TouchableOpacity
              style={[
                styles.buttonList,
                {
                  backgroundColor:
                    user?.id == item.id ? theme.colors.gray : theme.colors.w,

                  borderColor:
                    list?.[index + 1]?.id === user?.id
                      ? "green"
                      : theme.colors.blue,
                },
              ]}
              onPress={() => {
                if (list?.[index + 1]?.id === user?.id) {
                  Alert.alert("Desafio", "Deseja desafiar essa pessoa", [
                    {
                      text: "Não",
                      style: "cancel",
                    },
                    {
                      text: "Sim",
                      onPress: () => {},
                    },
                  ]);
                }
              }}
            >
              <Text style={styles.list}>
                {item.name}
                {user?.id == item.id ? " (Você)" : ""}
              </Text>
              <Text style={styles.list}>{item.points}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
