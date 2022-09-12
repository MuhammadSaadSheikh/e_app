import {StyleSheet} from 'react-native';

//Constant
import Dimension from '../../assest/Constant';

//Theme
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  headerContainer: {
    width: Dimension.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  primaryContainer: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'QuattrocentoSans-Bold',
    fontSize: Dimension.width * 0.04,
    color: Colors.blackColor,
  },
});

export default styles;
