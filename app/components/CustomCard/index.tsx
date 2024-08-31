import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import routes from '@router/Routes';
import {ICardMovie} from './config';
import styles from './style';
import {Constants} from '@utils/Constant';
import {TextConstants} from '@utils/TextConstants';

const CustomCard = ({itemData}: ICardMovie) => {
  const navigation = useNavigation<any>();
  const handlePress = () =>
    navigation.navigate(routes.MOVIEDETAIL, {movieData: itemData});

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `${Constants.IMAGE_URL}${itemData?.poster_path}`,
          }}
          style={styles.img}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle} numberOfLines={1}>
          {itemData?.title}
        </Text>
        <Text style={styles.textDescription} numberOfLines={3}>
          {itemData?.overview}
        </Text>
        <Text style={styles.textDescription} numberOfLines={1}>
          {TextConstants.ReleaseYear}{' '}
          <Text style={[styles.textTitle, styles.textYear]}>
            {moment(itemData?.release_date).format('YYYY')}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomCard;
