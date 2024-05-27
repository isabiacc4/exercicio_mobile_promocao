import { Image, View, Text, StyleSheet } from "react-native";

export const Mensagempromo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>PROMOÇÃO</Text>
      <Text style={styles.produto}>Veja Multiuso 500ml Original</Text>
      <Text style={styles.promo}>Compre 2 e pague 1!</Text>
      <Image
        source={{
          uri: "https://cdn.awsli.com.br/800x800/1922/1922270/produto/221790843/9f426b48-87b6-454c-8e13-87245e937de4-removebg-preview-u49fl6lruw.png"
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "center",
  },

  titulo: {
    fontWeight: "bold",
    fontSize: 35,
    alignContent: "center",
    backgroundColor: "#64CBFF",
    padding: 15,
  },
  produto: {
    fontStyle: "italic",
    fontSize: 15,
  },
  promo: {
    color: "blue",
  },
});
