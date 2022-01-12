import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import MovieCard from './MovieCard';

interface Props {
  title?: string;
  movies: Movie[];
}

const HorizontalCarrousel = ({ title, movies }: Props) => {
  return (
    <View style={{ height: title ? 260 : 220 }}>
      {title && (
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10 }}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        renderItem={({ item }: any) => (
          <MovieCard movie={item} height={200} width={150} />
        )}
        keyExtractor={(item: any) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalCarrousel;

const styles = StyleSheet.create({});
