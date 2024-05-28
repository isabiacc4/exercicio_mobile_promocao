import { View, Button, Alert, StyleSheet, StatusBar, ScrollView, SafeAreaView } from "react-native";
import { Mensagempromo } from "./components/Mensagempromo";
import { Quantidadepreco } from "./components/Quantidadepreco";
import { Componente3 } from "./components/componente3";
import { Componente4 } from "./components/componente4";

const pagpromocao = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="green"/>
      {/* <SafeAreaView backgroundColor="blue" > */}
        <ScrollView>
          <Mensagempromo />
          <Quantidadepreco />
          <Button
            title="Adicionar no carrinho"
            onPress={() => Alert.alert("Limpador adicionado no carrinho 🧼")}
          />
          <Componente3 />
          <Componente4 />
          <Button
            title="Adicionar no carrinho"
            onPress={() =>
              Alert.alert("Desinfetante adicionado no carrinho 🧼")
            }
          />
        </ScrollView>
      {/* </SafeAreaView> */}
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
