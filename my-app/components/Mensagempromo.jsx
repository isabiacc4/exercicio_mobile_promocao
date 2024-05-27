import { Image, View, Text, StyleSheet } from "react-native";

export const Mensagempromo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>PROMOÇÃO</Text>
      <Text style={styles.produto}>Veja Multiuso 500ml Original</Text>
      <Text style={styles.promo}>Compre 2 e pague 1!</Text>
      <Image style={styles.img} source={{ uri: 'https://m.media-amazon.com/images/I/61XjP6BZeLL._AC_UF1000,1000_QL80_.jpg' }}/>
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
  img:{
    width: 100,
    height: 310,
    marginBottom: 10,
    marginTop: 10
  }
});
