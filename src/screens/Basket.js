import React from 'react';
import {View} from 'react-native';
import Header from '../components/Header';

const Basket = () => {
  return (
    <View style={{flex: 1}}>
      <Header search={false} circle={false} />
    </View>
  );
};

export default Basket;
