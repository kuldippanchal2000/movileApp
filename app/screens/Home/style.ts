import {StyleSheet} from 'react-native';
import color from '@utils/Color';
import {scaleFont, scaleHeight, scaleWidth} from '@utils/Scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: scaleHeight(16),
    paddingHorizontal: scaleWidth(16),
    backgroundColor: color.offGreen,
  },
  headText: {
    textAlign: 'center',
    color: color.main,
    fontSize: scaleFont(18),
    fontWeight: '700',
  },
  contentStyle: {paddingBottom: scaleHeight(20)},
  footer: {
    paddingVertical: scaleHeight(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {flex: 1},
});

export default styles;
