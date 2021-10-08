import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SelectColorBlock = ({color, selectedColor, setSelectedColor}) => {
  return (
    <TouchableOpacity
      onPress={() => setSelectedColor(color)}
      style={{
        backgroundColor: color,
        width: 40,
        height: 40,
        marginBottom: 8,
        borderRadius: 8,
        borderWidth: selectedColor === color ? 2.5 : 0,
        borderColor: '#FFFFFF',
      }}
    />
  );
};

export default SelectColorBlock;
