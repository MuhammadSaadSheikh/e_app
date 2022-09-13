import {StyleSheet} from 'react-native';

//theme
import {Colors, Fonts} from '../../theme';

//assest
import Dimension from '../../assest/Constant';

// import

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
  textStyle: {
    fontSize: Dimension.width * 0.06,
    color: Colors.whiteColor,
    ...Fonts.PoppinsItalic,
  },
});

export default styles;
