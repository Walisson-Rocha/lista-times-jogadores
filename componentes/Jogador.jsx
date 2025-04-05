import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-paper';

const Jogador = ({ nome, numero, imagem }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Card style={styles.card}>
          <View style={styles.container}>
            <Image source={{ uri: imagem }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.nome}>{nome}</Text>
              <Text style={styles.numero}>Número: {numero}</Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={{ uri: imagem }} style={styles.modalImage} />
            <Text style={styles.modalNome}>{nome}</Text>
            <Text style={styles.modalNumero}>Número: {numero}</Text>
            
            <Button 
              mode="contained" 
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              Fechar
            </Button>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  // Estilos anteriores permanecem os mesmos...
  card: {
    marginBottom: 8,
    backgroundColor: '#f8f9fa',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  numero: {
    fontSize: 14,
    color: '#6c757d',
  },
  // Novos estilos para o modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  modalNome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalNumero: {
    fontSize: 18,
    marginBottom: 20,
    color: '#555',
  },
  closeButton: {
    marginTop: 10,
    width: '100%',
  },
});

export default Jogador;