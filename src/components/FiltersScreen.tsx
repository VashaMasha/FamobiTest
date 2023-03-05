import React from 'react';
import {
  View, StyleSheet, Text, Pressable, ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FiltersScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>FILTERS</Text>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        />
      </View>
      <ScrollView />
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
  backButton: {
    position: 'absolute',
    left: 10,
    height: 24,
    width: 24,
    backgroundColor: 'black',
  },
});

export default FiltersScreen;
