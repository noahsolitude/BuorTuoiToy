import React from 'react';
import {TextInput} from 'react-native';

const MyInput = ({...props}) => {
  return (
    <TextInput
      {...props}
      style={{
        width: '100%',
        padding: 8,
        borderRadius: 8,
        color: '#333333',
        marginBottom: 20,
        backgroundColor: '#EFEFEF',
        ...props.style,
      }}
    />
  );
};

export default MyInput;
