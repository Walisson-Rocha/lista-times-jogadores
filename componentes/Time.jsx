import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { Card, Title, useTheme } from "react-native-paper";
import Jogador from "./Jogador";

const Time = ({ nome, anoFundacao, mascote, imagem, jogadores }) => {
  const { colors } = useTheme();

  return (
    <Card style={[styles.card, { backgroundColor: colors.surface }]}>
      <Card.Content>
        <View style={styles.header}>
          <Image source={{ uri: imagem }} style={styles.teamImage} />
          <View style={styles.teamInfo}>
            <Title style={[styles.title, { color: colors.text }]}>{nome}</Title>
            <Text style={{ color: colors.text }}>Fundação: {anoFundacao}</Text>
            <Text style={{ color: colors.text }}>Mascote: {mascote}</Text>
          </View>
        </View>

        <Title style={[styles.subtitle, { color: colors.text }]}>
          Jogadores:
        </Title>

        <FlatList
          data={jogadores}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Jogador
              nome={item.nome}
              numero={item.numero}
              imagem={item.imagem}
            />
          )}
          scrollEnabled={false}
          style={styles.playersList}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    marginHorizontal: 10,
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  teamImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  teamInfo: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: "bold",
  },
  playersList: {
    width: "100%",
  },
});

export default Time;
