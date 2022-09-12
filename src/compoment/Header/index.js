import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';

const Header = props => {
  const {title} = props;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.primaryContainer}></View>
      <View style={styles.secondaryContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.primaryContainer}></View>
    </View>
  );
};

export default Header;
