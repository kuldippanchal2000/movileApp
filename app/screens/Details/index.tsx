import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import styles from './style';
import {IMovie} from '@screens/Home/config';
import {Constants} from '@utils/Constant';
import {TextConstants} from '@utils/TextConstants';

const Details = () => {
  const route: any = useRoute();
  const movieData: IMovie = route?.params?.movieData;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={{
            uri: `${Constants.IMAGE_URL}${movieData?.poster_path}`,
          }}
          style={styles.img}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.headText}>{movieData?.title}</Text>
        <Text style={styles.textDescription}>{movieData?.overview}</Text>
        <Text style={styles.textDescription} numberOfLines={1}>
          {TextConstants.ReleaseDate}:{' '}
          <Text style={[styles.textTitle, styles.textYear]}>
            {movieData?.release_date}
          </Text>
        </Text>
        <Text style={styles.textDescription} numberOfLines={1}>
          {TextConstants.Popularity}:{' '}
          <Text style={[styles.textTitle, styles.textYear]}>
            {movieData?.popularity}
          </Text>
        </Text>
        <View style={styles.voteContainer}>
          <Text style={styles.textDescription} numberOfLines={1}>
            {TextConstants.AverageVote}:{' '}
            <Text style={[styles.textTitle, styles.textYear]}>
              {movieData?.vote_average}
            </Text>
          </Text>
          <Text style={styles.textDescription} numberOfLines={1}>
            {TextConstants.TotalVote}:{' '}
            <Text style={[styles.textTitle, styles.textYear]}>
              {movieData?.vote_count}
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
