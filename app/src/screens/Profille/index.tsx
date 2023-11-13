import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function Profile() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerForm}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <AntDesign name="arrowleft" size={24} color={"black"} />
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <View>
              <Ionicons name="camera-outline" size={20} color={"##2F80ED"} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.text}>Login</Text>
          <Text style={styles.textInput}>Login do usuário</Text>
          {/*             <TextInput
                style={styles.textInput}
                onChangeText={(text) => {}}
                value={""} 
                placeholder="Seu login"
                placeholderTextColor={"#959595"}
                
            /> */}
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.text}>Nome completo</Text>
          <Text style={styles.textInput}>Nome do usuário</Text>

          {/*             <TextInput
                style={styles.textInput}
                onChangeText={(text) => {}}
                value={""} 
                placeholder="Seu Nome Completo"
                placeholderTextColor={"#959595"}
                
            /> */}
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.text}>Telefone</Text>
          <Text style={styles.textInput}>Telefone do usuário</Text>

          {/*           <TextInput
            style={styles.textInput}
            onChangeText={(text) => {}}
            value={""} 
            placeholder="Telefone"
            placeholderTextColor={"#959595"}
          /> */}
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.text}>Email</Text>
          <Text style={styles.textInput}>Email do usuário</Text>

          {/*           <TextInput
            style={styles.textInput}
             onChangeText={(text) => {}}
            value={""} 
            placeholder="Seu Email"
            placeholderTextColor={"#959595"}
          /> */}
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.text}>Senha</Text>
          <Text style={styles.textInput}>Senha do usuário</Text>

          {/*           <TextInput
            style={styles.textInput}
             onChangeText={(text) => {}}
            value={""} 
            placeholder="Seu Senha"
            placeholderTextColor={"#959595"}
          />*/}
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={{ color: "white" }}>Editar perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
