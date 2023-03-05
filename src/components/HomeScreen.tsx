import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Text, ActivityIndicator, Pressable,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import api from '../api';
import { Game } from '../types/Game';

const HomeScreen = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [games, setGames] = useState<Game[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    api.games.getGames()
      .then((res: any) => setGames(res))
      .catch((err) => console.warn('err', err))
      .finally(() => setIsFetching(false));
  }, []);

  return (
    <View style={styles.content}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>APPS</Text>
        <Pressable
          onPress={() => navigation.navigate('Filters')}
          style={styles.filtersButton}
          disabled={isFetching}
        />
      </View>
      {isFetching && (
      <ActivityIndicator
        size="large"
        style={styles.activityIndicator}
      />
      )}
      <ScrollView>
        {games.length > 0 && !isFetching && games.map((game) => (
          <Text>{game.title}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  headerContainer: {
    width: '100%',
    top: 0,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 23,
  },
  filtersButton: {
    position: 'absolute',
    right: 10,
    height: 24,
    width: 24,
    backgroundColor: 'black',
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

export default HomeScreen;
