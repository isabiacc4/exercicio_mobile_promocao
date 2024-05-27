import { Image } from "react-native";

export const Mensagempromo = () => {
  return (
    <View>
      <Text>PROMOÇÃO</Text>
      <Text>Compre 2 e pague 1!</Text>
      <Image
        source={{
          uri: "https://vitalnutra.com.br/imagensProdutos/WhatsAppImage2022-09-12at09.31.35.jpeg",
        }}
        style={styles.image}
      />
    </View>
  );
};
