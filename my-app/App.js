import { View, Button, Alert } from "react-native";
import { Mensagempromo } from "./components/Mensagempromo";
import { Quantidadepreco } from "./components/Quantidadepreco";

const pagpromocao = () => {
  return (
    <View>
      <Mensagempromo />
      <Quantidadepreco />
  
      <Button title="Adicionar no carrinho" onPress={() => Alert.alert("Limpador adicionado no carrinho 🧼")}/>
    </View>
  );
};


export default pagpromocao;