import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import StoreItem from '../components/StoreItem';

export default function ({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <ScrollView style={styles.container}>
        <StoreItem
          title="Дальше бога нет!"
          imgSrc={require('../img/dalshe-boga-net.png')}
          users="1"
          time="60+"
          added="14"
          tags={['бой книга', 'ролевая игра', 'текстовая игра']}
          price="599"
        />
        <StoreItem
          title="The Forgotten history MAMMOTHODUS"
          imgSrc={require('../img/mammathodus.png')}
          users="1"
          time="60+"
          added="14"
          tags={['бой книга', 'ролевая игра', 'текстовая игра']}
          price="2500"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 4,
    backgroundColor: '#FFFFFF',
  },
  // imgWrapper: {
  //   paddingHorizontal: 44,
  // },
});
