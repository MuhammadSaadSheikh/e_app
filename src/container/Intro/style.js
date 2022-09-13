import {StyleSheet} from 'react-native';

//theme
import {Colors} from '../../theme';

//assest
import Dimension from '../../assest/Constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.whiteColor,
  },
  textStyle: {
    fontSize: Dimension.width * 0.08,
    color: Colors.whiteColor,
    fontFamily: 'QuattrocentoSans-Bold',
  },
});

export default styles;
