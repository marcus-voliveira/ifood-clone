import React from 'react';

import { ScrollView, StyleSheet } from 'react-native';
import Endereco from '../../components/Home/Endereco';
import Input from '../../components/Input';
import Sugestoes from '../../components/Home/Sugestoes';
import Promocoes from '../../components/Home/Promocoes';
import Ofertas from '../../components/Home/Ofertas';
import Categorias from '../../components/Home/Categorias';

export default function Home({ navigation }) {
  return (
    <ScrollView showsHorizontalScrollIndicator={true} style={styles.container}>
      <Endereco />
      <Sugestoes />
      <Promocoes />
      <Ofertas navigation={navigation} />
      <Categorias />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1A166',
  },

  
});