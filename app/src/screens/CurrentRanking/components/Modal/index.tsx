import React from "react";
import { Text, Modal, View, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { theme } from "../../../../global/styles/theme";
import { IRankingPlayer } from "../../../../interfaces/IRanking";

interface Props {
  modalVisible: boolean;
  playerA: IRankingPlayer;
  playerB: IRankingPlayer;
  onClose(): void;
  onConfirm(player: IRankingPlayer): void;
}

export function ModalRanking({
  modalVisible,
  playerA,
  playerB,
  onClose,
  onConfirm,
}: Props) {
  const [currentSelectedPlayer, setCurrentSelectedPlayer] =
    React.useState<IRankingPlayer>();
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
          <Text style={styles.modelText}>Clique no vencedor</Text>

          <TouchableOpacity
            style={[
              styles.buttonList,
              {
                backgroundColor:
                  currentSelectedPlayer?.id == playerA.id ? "green" : "white",
              },
            ]}
            onPress={() => {
              setCurrentSelectedPlayer(playerA);
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  color:
                    currentSelectedPlayer?.id == playerA.id
                      ? "white"
                      : theme.colors.blue,
                },
              ]}
            >
              {playerA.name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonList,
              {
                backgroundColor:
                  currentSelectedPlayer?.id == playerB.id ? "green" : "white",
              },
            ]}
            onPress={() => {
              setCurrentSelectedPlayer(playerB);
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  color:
                    currentSelectedPlayer?.id == playerB.id
                      ? "white"
                      : theme.colors.blue,
                },
              ]}
            >
              {playerB.name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modelButton}
            onPress={() => {
              if (currentSelectedPlayer) {
                Alert.alert(
                  "Atenção",
                  `Ao confirmar essa ação não pode ser desfeita, ${currentSelectedPlayer?.name} que ganhou?`,
                  [
                    {
                      text: "Não",
                      style: "cancel",
                    },
                    {
                      text: "Sim",
                      onPress: () => {
                        onConfirm(currentSelectedPlayer);
                        onClose();
                      },
                    },
                  ]
                );
              } else {
                Alert.alert("Atenção!", "Selecione um time vencedor");
              }
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
