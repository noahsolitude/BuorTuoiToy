import React from 'react';
import {View} from 'react-native';
import PointCard from './PointCard';

const Point = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 12,
        paddingTop: 20,
      }}>
      <PointCard
        imgSrc={require('../img/dalshe-boga-net.png')}
        title="Дальше бога нет!"
        users="1"
        time="60+"
        added="14"
        price="599"
      />
      <PointCard
        imgSrc={require('../img/mammathodus.png')}
        title="The Forgotten history MAMMOTHODUS"
        users="1"
        time="60+"
        added="14"
        price="2500"
      />
    </View>
  );
};

export default Point;
