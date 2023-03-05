import React, { useState } from 'react';
import {
  View, StyleSheet, Text, Pressable, ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';

enum FilterType {
  Platform = 'PLATFORM:',
  Category = 'CATEGORY:',
  SortBy = 'SORT BY:',
}
const PLATFORMS = ['browser', 'pc'];
const CATEGORIES = ['mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports', 'social', 'sandbox', 'open-world', 'survival', 'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based', 'first-person', 'third-Person', 'top-down', 'tank', 'space', 'sailing', 'side-scroller', 'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 'action', 'military', 'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts'];
const SORTING_BY = ['release-date', 'popularity', 'alphabetical', 'relevance'];
const FiltersScreen = () => {
  const navigation = useNavigation();

  const [platform, setPlatform] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);

  const onSubmit = () => {
    navigation.navigate('Home', { platform, category, sortBy });
  };

  return (
    <View style={styles.content}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>FILTERS</Text>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        />
      </View>
      <ScrollView>
        <SelectDropdown
          data={SORTING_BY}
          onSelect={(selectedItem) => setSortBy(selectedItem)}
          buttonTextAfterSelection={(selectedItem) => selectedItem}
          rowTextForSelection={(item) => item}
          defaultButtonText={FilterType.SortBy}
          defaultValue={FilterType.SortBy}
          buttonStyle={styles.sortingButton}
        />
        <SelectDropdown
          data={PLATFORMS}
          onSelect={(value) => setPlatform(value)}
          buttonTextAfterSelection={(value) => value}
          rowTextForSelection={(value) => value}
          defaultButtonText={FilterType.Platform}
          defaultValue={FilterType.Platform}
          buttonStyle={styles.sortingButton}
        />
        <SelectDropdown
          data={CATEGORIES}
          onSelect={(value) => setCategory(value)}
          buttonTextAfterSelection={(value) => value}
          rowTextForSelection={(value) => value}
          defaultButtonText={FilterType.Category}
          defaultValue={FilterType.Category}
          buttonStyle={styles.sortingButton}
        />
        <Pressable
          onPress={() => onSubmit()}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </Pressable>
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
  backButton: {
    position: 'absolute',
    left: 10,
    height: 24,
    width: 24,
    backgroundColor: 'black',
  },
  sortingButton: {
    width: 250,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  submitButton: {
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginTop: 40,
    marginRight: 10,
    backgroundColor: 'black',
  },
  submitButtonText: {
    color: 'white',
  },
});

export default FiltersScreen;
