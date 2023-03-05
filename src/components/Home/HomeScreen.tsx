import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Text, ActivityIndicator, Pressable, Image, FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Game } from '../../types/Game';
import GameComponent from './components/GameComponent';
import COLORS from '../../assets/colors';
import api from '../../api';

const HomeScreen = ({ route } : any) => {
  const { platform, category, sortBy } = route.params || {};
  const [isFetching, setIsFetching] = useState(true);
  const [games, setGames] = useState<Game[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    setIsFetching(true);
    api.games.getGames(platform, category, sortBy)
      .then((res: any) => {
        setGames(res);
      })
      .catch((err: any) => console.warn('err', err))
      .finally(() => setIsFetching(false));
  }, [platform, category, sortBy]);

  return (
    <View style={styles.content}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>APPS</Text>
        <Pressable
          onPress={() => navigation.navigate('Filters')}
          style={styles.filtersButton}
          disabled={isFetching}
        >
          <Image source={require('../../assets/icons/filter.png')} style={styles.filterIcon} />
        </Pressable>
      </View>
      {isFetching && (
      <ActivityIndicator
        size="large"
        style={styles.activityIndicator}
      />
      )}
      {!isFetching && (
        <FlatList
          style={styles.listContent}
          data={games}
          renderItem={({ item }) => <GameComponent game={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
  },
  listContent: {
    paddingHorizontal: 10,
    marginTop: 40,
  },
  headerContainer: {
    width: '100%',
    position: 'absolute',
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
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
});

export default HomeScreen;
