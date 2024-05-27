import { View, Button } from "react-native";
import { Mensagempromo } from "./components/Mensagempromo";
import { Quantidadepreco  } from "./components/Quantidadepreco";

export const pagpromocao = () => {
  return (
    <View>
      <Mensagempromo/>
      <Quantidadepreco/>
      <Button
        title="Adicionar ao carrinho"
        onPress={() => Alert.alert("Coxinha adicionada ao carrinho! 🥟")}
      />
    </View>
  );
};
