import {StyleSheet} from 'react-native';
import color from '@utils/Color';
import {scaleFont, scaleHeight, scaleWidth} from '@utils/Scale';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.main,
    flexDirection: 'row',
    flex: 1,
    marginVertical: scaleHeight(10),
    borderRadius: scaleHeight(8),
    paddingVertical: scaleWidth(8),
    paddingHorizontal: scaleWidth(12),
    gap: scaleWidth(10),
  },
  imageContainer: {flex: 0.3, justifyContent: 'center'},
  img: {
    height: scaleHeight(100),
    width: scaleWidth(100),
    borderRadius: scaleHeight(8),
  },
  textContainer: {flex: 0.7, gap: scaleHeight(4)},
  textTitle: {
    color: color.white,
    fontSize: scaleFont(14),
    fontWeight: '700',
  },
  textDescription: {
    color: color.white,
    fontSize: scaleFont(12),
    fontWeight: '400',
  },
  textYear: {
    color: color.cream,
  },
});

export default styles;
