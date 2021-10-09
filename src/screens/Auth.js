import React from 'react';
import {Image, Text, View} from 'react-native';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';

const Auth = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
      }}>
      <Image
        style={{marginBottom: 40}}
        source={require('../img/buor-logo-auth.png')}
      />
      <View style={{width: '100%'}}>
        <MyInput
          placeholder="Mail"
          placeholderTextColor="#333333"
          style={{
            marginBottom: 20,
          }}
        />
        <MyInput
          placeholder="Password"
          placeholderTextColor="#333333"
          style={{
            marginBottom: 40,
          }}
        />
        <MyButton
          style={{marginBottom: 12}}
          onPress={() => navigation.navigate('MainTabs')}>
          <Text>Login</Text>
        </MyButton>
        <MyButton onPress={() => navigation.navigate('Registration')}>
          <Text>Create new</Text>
        </MyButton>
      </View>
    </View>
  );
};

export default Auth;
