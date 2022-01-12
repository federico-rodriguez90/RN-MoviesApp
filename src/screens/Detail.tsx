import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { ActivityIndicator } from 'react-native';
import MovieDetails from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

const Detail = ({ route, navigation }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { cast, isLoading, movieFull } = useMovieDetails(movie.id);

  console.log(isLoading);

  return (
    <ScrollView>
      <View style={styles.cardContainer}>
        <View style={styles.imageBorder}>
          <Image style={styles.cardImage} source={{ uri }} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.movieSubTitle}>{movie.original_title}</Text>
        <Text style={styles.movieTitle}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={35} color="red" style={{ marginTop: 20 }} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}

      {/* Boton Para volver */}
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={styles.backButton}>
        <Icon name="arrow-back-outline" size={50} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  cardImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  movieSubTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    elevation: 9,
    zIndex: 999,
    top: 10,
    left: 5,
  },
});

export default Detail;
