import React from "react";
import { SafeAreaView } from "react-native";
import { HeaderComponent } from "../../components/Header";

import { TouchableOpacity, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";
import { ModalMatch } from "./components/Modal";
import { ITime, ITournament } from "../../interfaces/ITournament";
import { useTournament } from "../../hooks/tournament";
import { SetCurrentTournament } from "../../store/modules/tournament/actions";
import { theme } from "../../global/styles/theme";

interface Props {
  name: "semifinais" | "final";
}

export function CurrentMatch() {
  const route = useRoute();
  const { name } = route.params as Props;
  const [modalVisible, setModalVisible] = React.useState(false);
  const [currentMatch, setCurrentMatch] = React.useState<Array<ITime>>();
  const { data: currentTournament } = useTournament();

  const matchs = currentTournament!.tournament[name];
  console.log(JSON.stringify(currentTournament));

  return (
    <SafeAreaView>
      {currentMatch && (
        <ModalMatch
          modalVisible={modalVisible}
          onClose={() => {
            setModalVisible(false);
          }}
          onConfirm={(time) => {
            const timesAtualizados = currentTournament?.tournament[name].map(
              (timeArray) => {
                let [timeA, timeB] = timeArray; // Desestruturando o array em dois objetos

                if (timeA.id === time.id) {
                  timeA = { ...timeA, ganhador: true };
                  timeB = { ...timeB, ganhador: false };
                }
                if (timeB.id === time.id) {
                  timeA = { ...timeA, ganhador: false };
                  timeB = { ...timeB, ganhador: true };
                }

                return [timeA, timeB];
              }
            );
            if (timesAtualizados) {
              const updatedTournament = {
                ...currentTournament,
                tournament: {
                  [name]: timesAtualizados,
                  ...Object.entries(currentTournament!.tournament)
                    .filter(([key]) => key !== name)
                    .reduce((acc, [key, value]) => {
                      //@ts-ignore
                      acc[key] = value;
                      return acc;
                    }, {}),
                },
              } as ITournament;
              SetCurrentTournament(updatedTournament);
            }
          }}
          timeA={currentMatch[0]}
          timeB={currentMatch![1]}
        />
      )}

      <HeaderComponent name={name} canGoback />
      <FlatList
        data={matchs ?? []}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setCurrentMatch(item);
              setModalVisible(true);
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  textDecorationLine:
                    item[0].ganhador == false ? "line-through" : "none",
                  color: item[0].ganhador == false ? "red" : theme.colors.blue,
                },
              ]}
            >
              {item[0].nome}
            </Text>
            <Text style={styles.text}>x</Text>
            <Text
              style={[
                styles.text,
                {
                  textDecorationLine:
                    item[1].ganhador == false ? "line-through" : "none",
                  color: item[1].ganhador == false ? "red" : theme.colors.blue,
                },
              ]}
            >
              {item[1]?.nome}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
