import React from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { HeaderComponent } from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRankingPlayers } from "../../hooks/ranking";
import { useUser } from "../../hooks/user";
import { theme } from "../../global/styles/theme";
import { ModalRanking } from "./components/Modal";
import { IUser } from "../../interfaces/IUser";
import { updateRanking } from "../../store/modules/ranking/actions";

export function CurrentRanking() {
  const { data: currentPlayerRanking, list } = useRankingPlayers();
  const { data: user } = useUser();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [challenged, setChallenged] = React.useState<IUser>({ id: 0, name: '', points: 0 });

  const currentUser = React.useMemo(() => list?.filter(item => item.id === user?.id)[0], [list]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ModalRanking
        modalVisible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
        onConfirm={async(time) => {
          if (time.id === currentUser?.id) {
            updateRanking(currentUser, challenged)
          }
        }}
        playerA={currentUser!}
        playerB={challenged}
      />
              
      <HeaderComponent name={currentPlayerRanking?.name ?? ""} canGoback />

      <FlatList
        scrollEnabled
        data={list!.slice().sort((a, b) => { return b.points - a.points; }) || []}
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
                      onPress: async() => { await setChallenged(item); setModalVisible(true) },
                    },
                  ]);
                }
              }}
            >
              <Text style={styles.list}>
                {item.name}
                {user?.id === item.id ? " (Você)" : ""}
              </Text>
              <Text style={styles.list}>{item.points}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
