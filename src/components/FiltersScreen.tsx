import React, { useState } from 'react';
import {
  View, StyleSheet, Text, Pressable, ScrollView, Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import FilterType from '../enums/FilterType';
import COLORS from '../assets/colors';
import { SORTING_BY, CATEGORIES, PLATFORMS } from '../constants/filters';

const FiltersScreen = ({ route } : any) => {
  const navigation = useNavigation();
  const params = route.params || {};
  const [platform, setPlatform] = useState<string | null>(params.platform);
  const [category, setCategory] = useState<string | null>(params.category);
  const [sortBy, setSortBy] = useState<string | null>(params.sortBy);

  const onSubmit = () => {
    navigation.navigate('Home', { platform, category, sortBy });
  };

  const onReset = () => {
    setPlatform(null);
    setCategory(null);
    setSortBy(null);
    navigation.navigate('Home', { platform: null, category: null, sortBy: null });
  };

  return (
    <View style={styles.content}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>FILTERS</Text>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image source={require('../assets/icons/angle-left.png')} style={styles.backIcon} />
        </Pressable>
      </View>
      <ScrollView>
        <SelectDropdown
          data={SORTING_BY}
          onSelect={(selectedItem) => setSortBy(selectedItem)}
          buttonTextAfterSelection={(selectedItem) => selectedItem}
          rowTextForSelection={(item) => item}
          defaultButtonText={FilterType.SortBy}
          defaultValue={sortBy || FilterType.SortBy}
          buttonStyle={styles.sortingButton}
          dropdownStyle={styles.dropdownStyle}
        />
        <SelectDropdown
          data={PLATFORMS}
          onSelect={(value) => setPlatform(value)}
          buttonTextAfterSelection={(value) => value}
          rowTextForSelection={(value) => value}
          defaultButtonText={FilterType.Platform}
          defaultValue={platform || FilterType.Platform}
          buttonStyle={styles.sortingButton}
          dropdownStyle={styles.dropdownStyle}
        />
        <SelectDropdown
          data={CATEGORIES}
          onSelect={(value) => setCategory(value)}
          buttonTextAfterSelection={(value) => value}
          rowTextForSelection={(value) => value}
          defaultButtonText={FilterType.Category}
          defaultValue={category || FilterType.Category}
          buttonStyle={styles.sortingButton}
          dropdownStyle={styles.dropdownStyle}
        />
        <Pressable
          onPress={() => onSubmit()}
          style={[styles.button, styles.submitButton]}
        >
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </Pressable>
        <Pressable
          onPress={() => onReset()}
          style={styles.button}
        >
          <Text>RESET</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
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
  },
  sortingButton: {
    width: 250,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: COLORS.WHITE,
  },
  button: {
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginTop: 40,
    marginRight: 10,
  },
  submitButton: {
    backgroundColor: COLORS.BLACK,
  },
  submitButtonText: {
    color: COLORS.WHITE,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  dropdownStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.WHITE,
  },
});

export default FiltersScreen;
