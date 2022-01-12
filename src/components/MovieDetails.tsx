/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { Cast } from '../interfaces/creditInterface';
import { MovieFull } from '../interfaces/movieInterface';
import ActorCard from './ActorCard';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text>{movieFull.vote_average}</Text>

          <Text style={{ marginLeft: 5 }}>
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
        {/* Historia */}
        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
          Historia
        </Text>
        <Text style={{ fontSize: 16, marginTop: 10 }}>
          {movieFull.overview}
        </Text>
        {/* Presupuesto */}
        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
          Presupuesto
        </Text>
        <Text style={{ fontSize: 18, marginTop: 10 }}>
          {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
        </Text>
      </View>
      {/* Actores */}
      <View style={{ marginTop: 10, marginBottom: 100 }}>
        <Text
          style={{
            marginHorizontal: 20,
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <ActorCard actor={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10, height: 120 }}
        />
      </View>
    </>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
