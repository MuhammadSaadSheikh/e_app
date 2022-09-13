import React, {useRef} from 'react';
import {SafeAreaView, View, Text, StatusBar, Animated} from 'react-native';

//Globalstyle
import {globalStyle} from '../../theme';

//Style
import styles from './style';

//theme
import {Colors} from '../../theme';

//Component
import {Header} from '../../compoment';

const Intro = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar animated={true} backgroundColor={Colors.secondary} />
      <Header title="KUPA" />
      <View></View>
    </SafeAreaView>
  );
};

export default Intro;
