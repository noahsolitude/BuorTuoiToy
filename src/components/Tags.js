import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Tags = ({tags}) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    box: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5B33E',
      borderRadius: 12,
      paddingHorizontal: 8,
      paddingVertical: 2,
    },
    text: {
      fontSize: 12,
      color: '#FFFFFF',
    },
  });

  return (
    <View style={styles.container}>
      {tags.map((i, index) => {
        return (
          <View key={index} style={styles.box}>
            <Text style={styles.text}>{i}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Tags;
