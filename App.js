import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

import Headers from './components/Headers';
import Challenges from './components/Challenges';
import Workouts from './components/Workouts';

const data = [
  {
    id: 1,
    name: 'Full Body Challenge',
    days: 30,
    workouts: 35,
    level: 'EASY',
    url:
      'https://cdn.pixabay.com/photo/2016/11/22/22/24/adult-1850925_960_720.jpg',
  },
  {
    id: 2,
    name: 'Begineer Abs Challenge',
    days: 30,
    workouts: 35,
    level: 'EASY',
    url:
      'https://cdn.pixabay.com/photo/2015/02/27/17/43/weights-652486_960_720.jpg',
  },
];

const App = () => {
  return (
    <View style={styles.screen}>
      <Headers />
      <Challenges data={data} />
      <Workouts />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
