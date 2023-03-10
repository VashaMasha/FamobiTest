import * as React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/router/MainStackNavigator';
import COLORS from './src/assets/colors';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.content}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? COLORS.BLACK : COLORS.WHITE}
      />
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default App;
