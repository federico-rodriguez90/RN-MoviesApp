import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/creditInterface';

interface Props {
  actor: Cast;
}

const ActorCard = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{ uri }}
          style={{ width: 80, height: 80, borderRadius: 10 }}
        />
      )}

      <View style={styles.actorInfo}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{actor.name}</Text>
        <Text style={{ fontSize: 16, opacity: 0.7 }}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default ActorCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 80,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 5,
    marginLeft: 15,
    paddingRight: 10,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 5,
  },
});
