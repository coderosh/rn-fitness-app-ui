import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

import Badge from './Badge';

const Headers = _ => (
  <React.Fragment>
    <View style={styles.icons}>
      <View style={styles.leftBtn}>
        <Ionicons name="md-list" size={30} color="#555" />
      </View>
      <View style={styles.rightBtns}>
        <Ionicons
          style={{ marginRight: 15 }}
          name="md-search"
          size={30}
          color="#555"
        />
        <Ionicons name="md-options" size={30} color="#555" />
      </View>
    </View>
    <View>
      <Text style={styles.headerText}>Start Your </Text>
      <Text style={styles.headerText}>
        <Text style={styles.pinkText}>Fitness</Text> Journey
      </Text>
      <View style={styles.badges}>
        <Badge name="Easy Level" />
        <Badge name="Free" />
      </View>
    </View>
  </React.Fragment>
);

const styles = StyleSheet.create({
  icons: {
    paddingVertical: Constants.statusBarHeight + 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  rightBtns: {
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  pinkText: {
    color: '#FC427B',
  },
  badges: {
    flexDirection: 'row',
    marginVertical: 20,
    paddingHorizontal: 15,
  },
});

export default Headers;
