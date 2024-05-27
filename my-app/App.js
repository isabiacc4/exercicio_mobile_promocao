import { View, Button, StyleSheet } from "react-native";
import { Mensagempromo } from "./components/Mensagempromo";
import { Quantidadepreco } from "./components/Quantidadepreco";

export const pagpromocao = () => {
  return (
    <View class={styles.container}>
      <Mensagempromo />
      <Quantidadepreco />
      <Button
        title="Adicionar ao carrinho"
        onPress={() => Alert.alert("Coxinha adicionada ao carrinho! 🥟")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 60,

  },

})