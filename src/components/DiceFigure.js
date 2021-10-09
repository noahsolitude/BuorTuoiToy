import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import CubeSvg from '../img/svg/Vector.svg';
import BallSvg from '../img/svg/ball.svg';
import PyramidSvg from '../img/svg/pyramid.svg';
import TriangleSvg from '../img/svg/triangle-down.svg';
import RubySvg from '../img/svg/ruby.svg';
import PentagramSvg from '../img/svg/pentagram.svg';

const DiceFigure = ({
  title,
  size,
  color,
  text,
  setSelectedItem,
  selectedItem,
  id,
}) => {
  const svgs = [
    {
      title: 'cube',
      svgImg: () => <CubeSvg fill={color} width={size} height={size} />,
    },
    {
      title: 'ball',
      svgImg: () => <BallSvg fill={color} width={size} height={size} />,
    },
    {
      title: 'pyramid',
      svgImg: () => <PyramidSvg fill={color} width={size} height={size} />,
    },
    {
      title: 'triangle',
      svgImg: () => <TriangleSvg fill={color} width={size} height={size} />,
    },
    {
      title: 'ruby',
      svgImg: () => (
        <RubySvg fill={color} stroke={color} width={size} height={size} />
      ),
    },
    {
      title: 'pentagram',
      svgImg: () => <PentagramSvg fill={color} width={size} height={size} />,
    },
  ];

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

  const render = () => {
    for (let i = 0; i < svgs.length; i++) {
      if (title === svgs[i].title) {
        return svgs[i].svgImg();
      }
    }
    return;
  };
  return (
    <TouchableOpacity
      style={styles.figure}
      onPress={() => {
        setSelectedItem({title: title, text: text, id: id});
      }}>
      {render()}
      {text && <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default DiceFigure;
