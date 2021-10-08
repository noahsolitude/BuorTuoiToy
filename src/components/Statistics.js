import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Statistics = ({users, time, added, marginRight = 16}) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
    },
    box: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 56,
      height: 20,
      borderWidth: 1,
      borderRadius: 12,
      borderColor: '#F5B33E',
      marginRight: marginRight,
    },
    text: {
      fontSize: 12,
      marginLeft: 1,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Icon name="users" size={12} color="black" />
        <Text style={styles.text}>{users}</Text>
      </View>
      <View style={styles.box}>
        <Icon name="clock" size={12} color="black" />
        <Text style={styles.text}>{time}</Text>
      </View>
      <View style={styles.box}>
        <Icon name="user-plus" size={12} color="black" />
        <Text style={styles.text}>{added}</Text>
      </View>
    </View>
  );
};

export default Statistics;
