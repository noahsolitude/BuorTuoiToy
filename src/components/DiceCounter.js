import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const DiceCounter = () => {
  const [counter, setCounter] = useState(99);
  return (
    <View>
      <Text style={{color: '#FFFFFF', marginBottom: 8}}>Количество:</Text>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            setCounter(counter - 1);
          }}>
          <IconFontAwesome5 color="#FFFFFF" size={15} name="minus" />
        </TouchableOpacity>
        <Text style={{color: '#FFFFFF', fontSize: 20, marginHorizontal: 5}}>
          {counter}
        </Text>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            setCounter(counter + 1);
          }}>
          <IconFontAwesome5 color="#FFFFFF" size={15} name="plus" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 8,
  },
});

export default DiceCounter;
