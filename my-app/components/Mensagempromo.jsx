import { Image, View, Text } from "react-native";

export const Mensagempromo = () => {
  return (
    <View>
      <Text>PROMOÇÃO</Text>
      <Text>Veja Multiuso 500ml Original</Text>
      <Text>Compre 2 e pague 1!</Text>
      <Image
        source={{
          uri: "https://cdn.awsli.com.br/2500x2500/63/63356/produto/75587621acd8398f0a.jpg",
        }}
    
      />
    </View>
  );
};
