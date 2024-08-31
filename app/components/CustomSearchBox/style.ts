import {StyleSheet} from 'react-native';
import color from '@utils/Color';
import {scaleFont, scaleHeight, scaleWidth} from '@utils/Scale';

const styles = StyleSheet.create({
  container: {
    borderRadius: scaleHeight(8),
    borderWidth: scaleWidth(1),
    borderColor: color.grey1,
    padding: scaleWidth(12),
    marginTop: scaleHeight(12),
  },
  text: {
    padding: 0,
    fontSize: scaleFont(12),
  },
});

export default styles;
