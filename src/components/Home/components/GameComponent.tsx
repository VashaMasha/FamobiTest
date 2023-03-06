import React from 'react';
import {
  View, StyleSheet, Text, Pressable, Image, Dimensions, Linking,
} from 'react-native';
import { Game } from '../../../types/Game';
import COLORS from '../../../assets/colors';

const { width } = Dimensions.get('window');

type GameComponentProps = {
  game: Game
}
const TextComponent = ({ name, value }: { name: string, value: string }) => (
  <Text style={styles.text}>
    {name}
    :
    {' '}
    {value}
  </Text>
);
const GameComponent = ({ game } : GameComponentProps) => (
  <View style={styles.gameContainer}>
    <Text style={[styles.text, styles.gameTitle]}>{game.title}</Text>
    <Text style={[styles.text, styles.gameDescription]}>{game.short_description}</Text>
    <Image
      style={styles.gameImage}
      source={{
        uri: game.thumbnail,
      }}
    />
    <TextComponent name="Genre" value={game.genre} />
    <TextComponent name="Platform" value={game.platform} />
    <TextComponent name="Developed by" value={game.developer} />
    <TextComponent name="Publisher" value={game.publisher} />
    <TextComponent name="Release Date" value={(new Date(game.release_date)).toLocaleDateString()} />
    <View style={styles.buttonsContainer}>
      <Pressable
        style={styles.button}
        onPress={() => Linking.openURL(game.game_url)}
      >
        <Text style={styles.text}>Play now</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => Linking.openURL(game.freetogame_profile_url)}
      >
        <Text style={styles.text}>Read more </Text>
      </Pressable>
    </View>
  </View>
);

const styles = StyleSheet.create({
  gameContainer: {
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  gameTitle: {
    textTransform: 'uppercase',
    marginBottom: 2,
    fontSize: 18,
    textAlign: 'center',
  },
  gameImage: {
    width: width * 0.90,
    height: 190,
    alignSelf: 'flex-start',
    borderRadius: 20,
    marginVertical: 5,
  },
  button: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 5,
  },
  gameDescription: {
    fontSize: 18,
    textAlign: 'center',
  },
  text: {
    color: COLORS.BLACK,
  },
});

export default GameComponent;
