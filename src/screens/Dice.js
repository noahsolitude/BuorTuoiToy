import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DiceFigures from '../components/DiceFigures';
import SelectColorLeft from '../components/ColorSelection';
import DiceCounter from '../components/DiceCounter';

const colorsDataLeft = [
  '#C10000',
  '#F1931A',
  '#00C1B5',
  '#3E00C1',
  '#C100A2',
  '#3EC100',
  '#00C159',
  '#000000',
  '#FFFFFF',
  '#8300C1',
];

const colorsDataRight = ['#C10000', '#F1931A', '#00C1B5', '#3E00C1'];

export default function () {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      paddingTop: 16,
      paddingHorizontal: 16,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  });

  return (
    <SafeAreaView>
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        source={require('../img/dices-bg.png')}>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <DiceFigures />
              <SelectColorLeft colorsData={colorsDataLeft} />
              <SelectColorLeft colorsData={colorsDataRight} />
            </View>

            <DiceCounter />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
