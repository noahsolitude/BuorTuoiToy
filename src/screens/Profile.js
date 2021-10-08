import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Achievements from '../components/Achievements';
import Point from '../components/Point';

export default function () {
  const [toggleBlocks, setToggleBlocks] = useState(false);

  const styles = StyleSheet.create({
    boxSelectWrapperLeft: {
      flex: 1,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: toggleBlocks ? '#EFEFEF' : '#FFFFFF', //
      borderTopRightRadius: 12,
      borderTopLeftRadius: 12,
    },
    boxSelectWrapperRight: {
      flex: 1,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: toggleBlocks ? '#FFFFFF' : '#EFEFEF', //
      borderTopRightRadius: 12,
      borderTopLeftRadius: 12,
    },
  });

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 216,
          backgroundColor: '#EFEFEF',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 62,
            backgroundColor: '#FFA900',
          }}></View>
        <View
          style={{
            width: 150,
            paddingVertical: 6,
            backgroundColor: '#FFA900',
            alignItems: 'center',
          }}>
          <Text style={{color: '#FFFFFF'}}>??????????????</Text>
        </View>
      </View>
      <View style={{height: '100%', width: '100%'}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.boxSelectWrapperLeft}
            onPress={() => {
              setToggleBlocks(false);
            }}>
            <Text>Point 237</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxSelectWrapperRight}
            onPress={() => {
              setToggleBlocks(true);
            }}>
            <Text>Achievements</Text>
          </TouchableOpacity>
        </View>
        {toggleBlocks ? <Achievements /> : <Point />}
      </View>
    </View>
  );
}
