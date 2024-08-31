import {StyleSheet} from 'react-native';
import color from '@utils/Color';
import {scaleFont, scaleHeight, scaleWidth} from '@utils/Scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.offGreen,
  },
  headText: {
    textAlign: 'center',
    color: color.main,
    fontSize: scaleFont(18),
    fontWeight: '700',
    marginTop: scaleHeight(12),
  },
  img: {
    height: scaleHeight(300),
    width: '100%',
  },
  bottomContainer: {
    paddingHorizontal: scaleHeight(16),
  },
  textDescription: {
    color: color.black,
    fontSize: scaleFont(12),
    fontWeight: '400',
    marginTop: scaleHeight(8),
  },
  textTitle: {
    color: color.black,
    fontSize: scaleFont(14),
    fontWeight: '700',
  },
  textYear: {
    color: color.main,
  },
  voteContainer: {
    flexDirection: 'row',
    gap: scaleWidth(20),
  },
});

export default styles;
