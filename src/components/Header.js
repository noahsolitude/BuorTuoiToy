import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = ({circle = true, search = true, cart = true}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        height: 55,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
      }}>
      {circle && <Icon name="circle" size={24} color="#FFA900" />}
      {search && (
        <View
          style={{
            flex: 1,
            backgroundColor: '#EFEFEF',
            borderRadius: 16,
            height: 35,
            paddingLeft: 17,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            overflow: 'hidden',
            marginHorizontal: 12,
          }}>
          <Icon name="search" size={20} color="#FFFFFF" />
          <TextInput
            style={{
              width: '100%',
              height: '200%',
              // backgroundColor: 'red',
            }}></TextInput>
        </View>
      )}

      {cart && (
        <TouchableOpacity onPress={() => navigation.navigate('Basket')}>
          <Icon name="shopping-cart" size={24} color="#FFA900" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
