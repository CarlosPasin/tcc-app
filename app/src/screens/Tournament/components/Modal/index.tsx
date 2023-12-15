import { Text, Modal, View, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { ITournament } from "../../../../interfaces/ITournament";
import MultiSelect from "react-native-multiple-select";
import { useRankingPlayers, useRankings } from "../../../../hooks/ranking";
import { theme } from "../../../../global/styles/theme";

interface Props {
  modalVisible: boolean;
  onClose(): void;
  onCreate(tournament?: ITournament): void;
}

export function ModalTournament({ modalVisible, onClose, onCreate }: Props) {
  const [selectedItems, setSelectedItems] = React.useState<any[]>([]);
  const [selectedTypeTournament, setSelectedTypeTournament] =
    React.useState<any>();
  const [nameTournament, setNameTournament] = React.useState("");
  const { list } = useRankingPlayers();
  const { list: listRankings } = useRankings();

  const shuffleSelectedItems = selectedItems.sort();

  return (
    <Modal
      transparent
      style={styles.container}
      visible={modalVisible}
      onRequestClose={onClose}
    >
      <View style={{ justifyContent: "space-between", flex: 1 }}>
        <TouchableOpacity
          style={styles.buttonClose}
          onPress={() => {
            onClose();
          }}
        />
        <View style={styles.wrapper2}>
          <Text style={styles.modelText}>Criar campeonato</Text>
          <View style={styles.containerInput}>
            <Text style={styles.text}>Nome do torneio</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text: string) => {
                setNameTournament(text);
              }}
              value={nameTournament}
              placeholder="Digite o nome do torneio"
              placeholderTextColor={"#959595"}
            />
          </View>
          <MultiSelect
            hideTags
            items={list ?? []}
            uniqueKey="name"
            onSelectedItemsChange={(i) => {
              setSelectedItems(i);
            }}
            selectedItems={selectedItems}
            selectText="Selecione as pessoas"
            searchInputPlaceholderText="Buscar pessoas"
            onChangeInput={(text) => console.log(text)}
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor={theme.colors.blue}
            selectedItemIconColor={theme.colors.blue}
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{ color: "#CCC" }}
            submitButtonColor={theme.colors.blue}
            submitButtonText="Finalizar seleção"
          />
          <MultiSelect
            hideTags
            single
            items={listRankings ?? []}
            uniqueKey="name"
            onSelectedItemsChange={(i) => setSelectedTypeTournament(i)}
            selectedItems={selectedTypeTournament}
            selectText="Selecione o torneio"
            searchInputPlaceholderText="Buscar pessoas"
            onChangeInput={(text) => console.log(text)}
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor={theme.colors.blue}
            selectedItemIconColor={theme.colors.blue}
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{ color: "#CCC" }}
            submitButtonColor={theme.colors.blue}
            submitButtonText="Finalizar seleção"
          />
          <TouchableOpacity
            style={styles.modelButton}
            onPress={() => {
              if (selectedItems.length > 4) { Alert.alert('O número de pessoas não pode ser maior que 4'); return; }
              onCreate({
                id: Date.now() + Math.random(),
                name: nameTournament,
                tournament: {
                  semifinais: [
                    [
                      {
                        id: list?.filter(item => item.name === shuffleSelectedItems[0])[0].id,
                        nome: shuffleSelectedItems[0],
                        jogadores: ["a"],
                      },
                      {
                        id: list?.filter(item => item.name === shuffleSelectedItems[1])[0].id,
                        nome: shuffleSelectedItems[1],
                        jogadores: ["a"],
                      },
                    ],
                    [
                      {
                        id: list?.filter(item => item.name === shuffleSelectedItems[2])[0].id,
                        nome: shuffleSelectedItems[2],
                        jogadores: ["a"],
                      },
                      {
                        id: list?.filter(item => item.name === shuffleSelectedItems[3])[0].id,
                        nome: shuffleSelectedItems[3],
                        jogadores: ["a"],
                      },
                    ],
                  ],
                  final: {},
                },
              } as ITournament);
              setSelectedItems([])

              onClose();
            }}
          >
            <Text style={styles.modelButtonText}>Criar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modelButton}
            onPress={() => onClose()}
          >
            <Text style={styles.modelButtonText}>Sair</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonClose}
          onPress={() => {
            onClose();
          }}
        />
      </View>
    </Modal>
  );
}
