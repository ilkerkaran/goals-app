import React from 'react';
import GoalListItem from './GoalListItem';
import { View, FlatList, StyleSheet } from 'react-native';

const goalList = ({ goals, onGoalDelete }) => {
  return (<View style={styles.list}>
    <FlatList data={goals}
      keyExtractor={(item) => item.id.toString()}
      extraData={goals}
      renderItem={({ item }) => (<View style={styles.listItem}>
        <GoalListItem goal={item} onDelete={onGoalDelete} />
      </View>)} />
  </View>);
}

export default goalList;

const styles = StyleSheet.create({
  list: {
    marginTop: 40,

  },
  listItem: {
    marginTop: 10,
    borderBottomColor: "gray",
    backgroundColor: "#eee",
    borderRightColor: "gray",
    borderBottomWidth: 1
  }
});