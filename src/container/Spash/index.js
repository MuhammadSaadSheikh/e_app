import React, {useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';

//Globalstyle
// import { glob/alStyle } from '../../theme'

//Style
import styles from './style';

//theme
import {Colors} from '../../theme';

const SplashScreen = props => {
  // const animationValue = new Animated.Value(0);

  // useEffect(() => {
  //   handleAnimate();
  // }, []);

  // const handleAnimate = () => {
  //   animationValue.setValue(0);
  //   Animated.timing(animationValue, {
  //     toValue: 1,
  //     duration: 2000,
  //     easing: Easing.linear,
  //   }).start(() => handleAnimate());
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     props.navigation.navigate('Intro');
  //   }, 2000);
  // });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={Colors.secondary} />
      <View>
        <Text style={styles.textStyle}>KUPA</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
