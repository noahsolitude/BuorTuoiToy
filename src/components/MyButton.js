import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MyButton = ({children, ...props}) => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        width: '100%',
        paddingVertical: 8,
        backgroundColor: '#FFA900',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        ...props.style,
      }}>
      {children}
    </TouchableOpacity>
  );
};

export default MyButton;
