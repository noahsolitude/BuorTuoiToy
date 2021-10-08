import React from 'react';
import {View, Text, Image} from 'react-native';
import Statistics from './Statistics';

const PointCard = ({imgSrc, title, users, time, added, price}) => {
  return (
    <View
      style={{
        marginLeft: 14,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#FFFFFF',
      }}>
      <Image style={{width: 72, height: 100}} source={imgSrc} />
      <View
        style={{
          flex: 1,
          paddingLeft: 18,
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            lineHeight: 20,
            fontSize: 16,
          }}>
          {title}
        </Text>
        <Statistics users={users} time={time} added={added} />
        <Text>{price} руб.</Text>
      </View>
    </View>
  );
};

export default PointCard;
