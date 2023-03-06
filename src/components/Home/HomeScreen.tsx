import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Text, ActivityIndicator, Pressable, Image, FlatList, Modal,
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
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    getGames();
  }, [platform, category, sortBy]);

  const onRefetch = () => {
    setError(null);
    getGames();
  };

  const getGames = () => {
    setIsFetching(true);
    api.games.getGames(platform, category, sortBy)
      .then((res: any) => {
        setGames(res);
      })
      .catch((err: any) => {
        setError(err);
        console.warn('err', err);
      })
      .finally(() => setIsFetching(false));
  };
  return (
    <View style={styles.content}>
      <View style={styles.headerContainer}>
        <Text style={[styles.text, styles.headerText]}>APPS</Text>
        <Pressable
          onPress={() => navigation.navigate('Filters', { platform, category, sortBy })}
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
          color={COLORS.BLACK}
        />
      )}
      {!isFetching && (
      <FlatList
        style={styles.listContent}
        data={games}
        renderItem={({ item }) => <GameComponent game={item} />}
      />
      )}
      {error && (
      <Modal
        transparent
        visible
        onRequestClose={() => setError(null)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalCard}>
            <Text style={[styles.text, styles.errorText]}>{error}</Text>
            <Pressable
              onPress={() => onRefetch()}
              style={styles.brefetchButton}
            >
              <Text style={styles.text}>TRY AGAIN</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: 300,
    height: 300,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: COLORS.GRAY,
    borderRadius: 30,
  },
  errorText: {
    textAlign: 'center',
    fontSize: 18,
  },
  brefetchButton: {
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginTop: 40,
    marginRight: 10,
  },
  text: {
    color: COLORS.BLACK,
  },
});

export default HomeScreen;
