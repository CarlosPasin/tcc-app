import React from "react";
import { Text, Modal, View, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { theme } from "../../../../global/styles/theme";
import { ITime } from "../../../../interfaces/ITournament";

interface Props {
  modalVisible: boolean;
  timeA: ITime;
  timeB: ITime;
  onClose(): void;
  onConfirm(time: ITime): void;
}

export function ModalMatch({
  modalVisible,
  timeA,
  timeB,
  onClose,
  onConfirm,
}: Props) {
  const [currentSelectedTime, setCurrentSelectedTime] = React.useState<ITime>();
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
                  currentSelectedTime?.id == timeA.id ? "green" : "white",
              },
            ]}
            onPress={() => {
              setCurrentSelectedTime(timeA);
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  color:
                    currentSelectedTime?.id == timeA.id
                      ? "white"
                      : theme.colors.blue,
                },
              ]}
            >
              {timeA.nome}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonList,
              {
                backgroundColor:
                  currentSelectedTime?.id == timeB.id ? "green" : "white",
              },
            ]}
            onPress={() => {
              setCurrentSelectedTime(timeB);
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  color:
                    currentSelectedTime?.id == timeB.id
                      ? "white"
                      : theme.colors.blue,
                },
              ]}
            >
              {timeB.nome}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modelButton}
            onPress={() => {
              if (currentSelectedTime) {
                Alert.alert(
                  "Atenção",
                  `Ao confirmar essa ação não pode ser desfeita, ${currentSelectedTime?.nome} que ganhou?`,
                  [
                    {
                      text: "Não",
                      style: "cancel",
                    },
                    {
                      text: "Sim",
                      onPress: () => {
                        onConfirm(currentSelectedTime);
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
