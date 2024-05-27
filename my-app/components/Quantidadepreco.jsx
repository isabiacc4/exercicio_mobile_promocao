import { StyleSheet, Text, View } from "react-native";

export const Quantidadepreco = () => {
  return (
    <View style={styles.bloco}>
      <Text>1 VEJA MULTIUSO - R$ 10,00</Text>
      <Text style={styles.oferta}>2 VEJA MULTIUSO - R$ 9,00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bloco: {
    backgroundColor: "#45D7FF",
    alignContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 50,
    marginBottom: 10
  },
  oferta: {
    color: "red",
  },
});
