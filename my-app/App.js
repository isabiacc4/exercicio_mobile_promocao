import { View, Button, Alert, StyleSheet, StatusBar } from "react-native";
import { Mensagempromo } from "./components/Mensagempromo";
import { Quantidadepreco } from "./components/Quantidadepreco";

const pagpromocao = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='blue'/>
      <Mensagempromo />
      <Quantidadepreco />
      <Button
        title="Adicionar no carrinho"
        onPress={() => Alert.alert("Limpador adicionado no carrinho 🧼")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    alignContent: "center",
    padding: 65,
    display: "flex",
    justifyContent: "center ",
    backgroundColor: "#B7E7FF",
  },
});

export default pagpromocao;
