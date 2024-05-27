import { View, Text, StyleSheet } from "react-native";

export const Componente4 = () => {
  return (
    <View style={styles.bloco}>
      <Text>1 LIMPADOR VEJA LAVANDA - R$ 20,00</Text>
      <Text style={styles.oferta}>2 LIMPADOR VEJA LAVANDA - R$ 19,00</Text>
    </View>
  );
};
export default Componente4;

const styles = StyleSheet.create({
  bloco: {
    backgroundColor: "#45D7FF",
    alignContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 50,
    marginBottom: 10,
  },
  oferta: {
    color: "red",
  },
});
