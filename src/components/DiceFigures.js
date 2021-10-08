import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import DiceFigure from './DiceFigure';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ICON_SIZE = 35;
const ICON_COLOR = '#FFFFFF';

const figuresData = [
  {id: 0, type: 'Ionicons', name: 'triangle-outline', text: 'D4'},
  {id: 1, type: 'Ionicons', name: 'cube-outline', text: 'D6'},
  {id: 2, type: 'Ionicons', name: 'triangle-outline', text: 'D8'},
  {id: 3, type: 'FontAwesome5', name: 'gem', text: 'D10'},
  {id: 4, type: 'Ionicons', name: 'football-outline', text: 'D12'},
  {id: 5, type: 'Ionicons', name: 'star-outline', text: 'D20'},
  {id: 6, type: 'FontAwesome5', name: 'gem', text: 'D%'},
];

const DiceFigures = () => {
  const [selectedItem, setSelectedItem] = useState(figuresData[1]);
  const styles = StyleSheet.create({
    container: {
      width: 50,
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      marginRight: 8,
    },
    figuresButton: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      width: 48,
      height: 48,
      borderWidth: 1,
      borderColor: showFigures ? '#FFA900' : '#FFFFFF',
      borderRadius: 12,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 4,
    },
    figuresArrowButton: {
      width: 48,
      height: 24,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: 12,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  const [showFigures, setShowFigures] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.figuresButton}
        onPress={() => {
          setShowFigures(!showFigures);
        }}>
        <IconIonicons name="cube-outline" size={ICON_SIZE} color={ICON_COLOR} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.figuresArrowButton}
        onPress={() => {
          setShowFigures(!showFigures);
        }}>
        <IconFontAwesome5
          name={showFigures ? 'chevron-down' : 'chevron-up'}
          size={20}
          color={showFigures ? '#FFA900' : '#FFFFFF'}
        />
      </TouchableOpacity>
      {showFigures && (
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderRadius: 12,
          }}>
          {figuresData.map((item, index) => {
            return (
              <DiceFigure
                key={index + item.id}
                id={item.id}
                type={item.type}
                name={item.name}
                size={ICON_SIZE}
                color={ICON_COLOR}
                text={item.text}
                setSelectedItem={setSelectedItem}
                selectedItem={selectedItem}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

export default DiceFigures;
