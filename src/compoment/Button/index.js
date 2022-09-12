import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

//Style
import styles from './style';

const Button = props => {
  const {container, onPress, title} = props;

  return (
    <TouchableOpacity style={[styles.btnContainer, container]}>
      <Text style={[styles.textStyle, textStyling]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
