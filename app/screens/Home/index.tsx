import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  View,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import useDebounce from '@hooks/useDebouce';
import CustomCard from '@components/CustomCard';
import SearchBox from '@components/CustomSearchBox';
import styles from './style';
import {IMovie} from './config';
import color from '@utils/Color';
import {TextConstants} from '@utils/TextConstants';
import {getMovieList, searchMovies} from '@utils/api';

const initialData = {pages: []};

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const debouncedQuery = useDebounce(searchText, 300);

  const {
    data: popularMovieData = initialData,
    isLoading: popularLoading,
    fetchNextPage,
    refetch: popularRefetch,
  } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: getMovieList,
    initialPageParam: 1,
    getNextPageParam: (_, pages) => pages.length + 1,
    enabled: !searchText.length,
  });

  const {
    data: searchData = initialData,
    isLoading: searchLoading,
    refetch: searchRefetch,
  } = useQuery({
    queryKey: ['movies', debouncedQuery],
    queryFn: () => searchMovies(debouncedQuery),
    enabled: !!searchText.length,
  });

  const movieData = searchText.length
    ? searchData?.results?.flat()
    : popularMovieData?.pages?.flat();
  const isLoading = searchText.length ? searchLoading : popularLoading;
  const movieRefetch = searchText.length ? searchRefetch : popularRefetch;

  const handleSearch = (query: React.SetStateAction<string>) => {
    setSearchText(query);
  };

  const renderMovieCard = ({item}: {item: IMovie}) => (
    <CustomCard itemData={item} />
  );

  const renderFooter = () => {
    if (!isLoading) {
      return null;
    }

    return (
      <View style={styles.footer}>
        <ActivityIndicator size="large" color={color.main} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headText}>{TextConstants.MovieList}</Text>
      <SearchBox text={'Search Movie'} onSearch={handleSearch} />
      {isLoading ? (
        <ActivityIndicator size={50} style={styles.flex} />
      ) : (
        <FlatList
          keyExtractor={item => `${item.id.toString()}`}
          contentContainerStyle={styles.contentStyle}
          data={movieData}
          renderItem={renderMovieCard}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => movieRefetch()}
              colors={[color.cream]}
            />
          }
          onEndReached={() => {
            if (!searchText.length) {
              fetchNextPage();
            }
          }}
          ListFooterComponent={renderFooter}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
