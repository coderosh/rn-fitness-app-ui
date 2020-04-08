import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WorkOutItem from './WorkOutItem';

const data = [
  {
    id: 1,
    url:
      'https://d50b62f6164e0c4a0279-11570554cb5edae3285603e6ab25c978.ssl.cf5.rackcdn.com/html_body_blocks/images/000/015/398/original/HowToDeadlift_en3855c167e134a1f24bfbde4c72d644f6.jpg?1574756752',
    title: 'Dead lifts',
    time: '00:30',
    times: '10 x',
  },
  {
    id: 2,
    url:
      'https://cdn.pixabay.com/photo/2017/04/27/08/29/sport-2264825_960_720.jpg',
    title: 'Push ups',
    time: '00:30',
    times: '10 x',
  },
  {
    id: 9,
    url:
      'https://cdn.pixabay.com/photo/2017/01/11/18/35/blur-1972569_960_720.jpg',
    title: 'Pull up',
    time: '00:30',
    times: '10 x',
  },
];

const Workouts = () => {
  return (
    <View style={styles.workouts}>
      <View style={styles.workoutHeader}>
        <Text style={styles.recentWorkout}>Recent Workouts</Text>
        <View style={styles.workoutsRight}>
          <Text
            style={{
              color: '#FC427B',
              fontWeight: 'bold',
              fontSize: 15,
              marginRight: 10,
            }}>
            See all
          </Text>
          <Ionicons name="ios-arrow-forward" color="#FC427B" size={15} />
        </View>
      </View>

      <React.Fragment>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={itemData => {
            return (
              <WorkOutItem
                title={itemData.item.title}
                time={itemData.item.time}
                times={itemData.item.times}
                uri={itemData.item.url}
              />
            );
          }}
        />
      </React.Fragment>
    </View>
  );
};

const styles = StyleSheet.create({
  workouts: {
    paddingHorizontal: 15,
    marginVertical: 20,
    flex: 1,
  },
  workoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recentWorkout: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  workoutsRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Workouts;
