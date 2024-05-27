import { View, Text, Image,StyleSheet } from "react-native";

export const Componente3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.produto}>
        Limpador para Casa Perfumado VEJA Sensações Lavanda & Bem Estar 500ml
      </Text>
      <Text style={styles.promo}>Compre 5 e pague 3!</Text>
      <Image
        style={styles.img}
        source={{
          uri: "https://static.paodeacucar.com/img/uploads/1/496/614496.png",
        }}
      />
    </View>
  );
};
export default Componente3;

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    alignItems: "center",
    alignContent: "center",

  },

  produto: {
    fontStyle: "italic",
    fontSize: 15,
  },
  promo: {
    color: "blue",
  },
  img: {
    width: 100,
    height: 310,
    marginBottom: 10,
    marginTop: 10,
  },
});
