import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const DiceFigure = ({
  type,
  name,
  size,
  color,
  text,
  setSelectedItem,
  selectedItem,
  id,
}) => {
  const isItemSelected = id => {
    return selectedItem.id == id;
  };

  const styles = StyleSheet.create({
    figure: {
      paddingBottom: 8,
      marginBottom: 8,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255, 255, 255, 0.4)',
    },
    text: {
      fontSize: 12,
      color: isItemSelected(id) ? '#FFA900' : '#FFFFFF',
    },
  });

  const render = type => {
    if (type === 'Ionicons') {
      return (
        <IconIonicons
          name={name}
          size={size}
          color={isItemSelected(id) ? '#FFA900' : color}
        />
      );
    } else if (type === 'FontAwesome5') {
      return <IconFontAwesome5 name={name} size={size * 0.8} color={color} />;
    }
  };
  return (
    <TouchableOpacity
      style={styles.figure}
      onPress={() => {
        setSelectedItem({type: type, name: name, text: text, id: id});
      }}>
      {render(type)}
      {text && <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default DiceFigure;
